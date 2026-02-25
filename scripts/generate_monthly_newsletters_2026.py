#!/usr/bin/env python3
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from shutil import copy2
import re

from reportlab.lib import colors
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


@dataclass(frozen=True)
class MonthlyNewsletter:
    month_number: int
    month_name: str
    year: int
    theme: str
    lead_story: str
    lead_details: tuple[str, ...]
    also_watching: tuple[str, ...]
    tool_of_the_month: str
    next_steps: tuple[str, ...]
    seo_keywords: tuple[str, ...]

    @property
    def slug(self) -> str:
        month = f"{self.month_number:02d}"
        theme_slug = re.sub(r"[^a-z0-9]+", "-", self.theme.lower()).strip("-")
        return f"best-computer-tech-monthly-newsletter-{self.year}-{month}-{theme_slug}"

    @property
    def title(self) -> str:
        return f"Best Computer Tech Monthly Newsletter - {self.month_name} {self.year}"

    @property
    def issue_label(self) -> str:
        return f"{self.month_name} {self.year} - {self.theme}"


BASE_DIR = Path(__file__).resolve().parents[1]
OUTPUT_DIR = BASE_DIR / "output" / "pdf"
PUBLIC_DIR = BASE_DIR / "public" / "newsletters"


def build_styles() -> dict[str, ParagraphStyle]:
    styles = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "Title",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=27,
            textColor=colors.HexColor("#0f172a"),
            spaceAfter=4,
        ),
        "issue": ParagraphStyle(
            "Issue",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=13,
            leading=18,
            textColor=colors.HexColor("#2563eb"),
            spaceAfter=6,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=14,
            textColor=colors.HexColor("#334155"),
            spaceAfter=6,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#475569"),
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=13.5,
            leading=17,
            textColor=colors.HexColor("#1d4ed8"),
            spaceBefore=8,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#0f172a"),
            spaceAfter=7,
        ),
        "lead": ParagraphStyle(
            "Lead",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=15,
            textColor=colors.HexColor("#0f172a"),
        ),
        "tool": ParagraphStyle(
            "Tool",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#0f172a"),
        ),
        "cta": ParagraphStyle(
            "CTA",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#0f172a"),
        ),
    }


def lead_box(text: str, style: ParagraphStyle, width: float) -> Table:
    table = Table([[Paragraph(text, style)]], colWidths=[width])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#eff6ff")),
                ("BOX", (0, 0), (-1, -1), 0.8, colors.HexColor("#bfdbfe")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def footer_drawer(issue: MonthlyNewsletter):
    keywords = ", ".join(issue.seo_keywords)

    def _draw(canvas, doc):
        canvas.saveState()
        canvas.setTitle(issue.title)
        canvas.setAuthor("Best Computer Tech LLC")
        canvas.setSubject(issue.issue_label)
        canvas.setKeywords(keywords)
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#64748b"))
        canvas.drawString(doc.leftMargin, 0.42 * inch, f"{issue.issue_label} | BestComputerTec.com")
        canvas.drawRightString(LETTER[0] - doc.rightMargin, 0.42 * inch, f"Page {doc.page}")
        canvas.restoreState()

    return _draw


def story_for_issue(issue: MonthlyNewsletter, style_map: dict[str, ParagraphStyle], width: float):
    story = [
        Paragraph("Best Computer Tech Monthly Newsletter", style_map["title"]),
        Paragraph(f"{issue.month_name} {issue.year} - {issue.theme}", style_map["issue"]),
        Paragraph(
            "Local computer repair and IT support intelligence for Palm Bay, Melbourne, and Brevard County businesses.",
            style_map["subtitle"],
        ),
        Paragraph(
            "SEO keywords focus: " + ", ".join(issue.seo_keywords),
            style_map["meta"],
        ),
        Paragraph("Lead Story", style_map["h2"]),
        lead_box(issue.lead_story, style_map["lead"], width),
        Spacer(1, 0.08 * inch),
    ]

    for detail in issue.lead_details:
        story.append(Paragraph(detail, style_map["body"]))

    story.append(Paragraph("Also Watching", style_map["h2"]))
    story.append(
        ListFlowable(
            [ListItem(Paragraph(item, style_map["body"]), leftIndent=8) for item in issue.also_watching],
            bulletType="bullet",
            bulletFontName="Helvetica",
            bulletFontSize=10,
            leftIndent=18,
            spaceBefore=2,
            spaceAfter=4,
        )
    )

    story.append(Paragraph("Tool of the Month", style_map["h2"]))
    story.append(lead_box(issue.tool_of_the_month, style_map["tool"], width))

    story.append(Paragraph("What To Do Next", style_map["h2"]))
    story.append(
        ListFlowable(
            [ListItem(Paragraph(item, style_map["body"]), leftIndent=8) for item in issue.next_steps],
            bulletType="bullet",
            bulletFontName="Helvetica",
            bulletFontSize=10,
            leftIndent=18,
            spaceBefore=2,
            spaceAfter=6,
        )
    )

    story.append(
        lead_box(
            "Need help implementing this month\'s plan? Contact Best Computer Tech at (321) 953-5199 or visit bestcomputertec.com/contact.",
            style_map["cta"],
            width,
        )
    )
    return story


def generate_pdf(issue: MonthlyNewsletter):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    output_path = OUTPUT_DIR / f"{issue.slug}.pdf"
    public_path = PUBLIC_DIR / f"{issue.slug}.pdf"

    styles = build_styles()
    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=LETTER,
        leftMargin=0.8 * inch,
        rightMargin=0.8 * inch,
        topMargin=0.75 * inch,
        bottomMargin=0.65 * inch,
    )
    story = story_for_issue(issue, styles, doc.width)
    draw_footer = footer_drawer(issue)
    doc.build(story, onFirstPage=draw_footer, onLaterPages=draw_footer)

    copy2(output_path, public_path)
    return output_path, public_path


NEWSLETTERS_2026 = (
    MonthlyNewsletter(
        month_number=1,
        month_name="January",
        year=2026,
        theme="Agents Become Co-Workers",
        lead_story="Agentic AI moves from pilots to production.",
        lead_details=(
            "Teams stop prompting and start delegating complete workflows like support triage, follow-ups, reporting, and approvals.",
            "The new baseline is clear: human-in-the-loop reviews, audit trails, and controlled tool permissions.",
        ),
        also_watching=(
            "AI governance (policy plus logging) becomes part of application design.",
            "Agent sprawl grows when too many bots ship without clear ownership.",
        ),
        tool_of_the_month="Password manager plus passkeys (for example 1Password or Bitwarden).",
        next_steps=(
            "Automate one workflow first: lead follow-up, ticket triage, or invoicing reminders.",
            "Require role-based access, activity logs, and a kill switch before broader rollout.",
        ),
        seo_keywords=(
            "agentic AI workflows",
            "IT support Palm Bay",
            "business automation Melbourne FL",
            "AI governance checklist",
            "computer consulting Brevard County",
        ),
    ),
    MonthlyNewsletter(
        month_number=2,
        month_name="February",
        year=2026,
        theme="AI Security Arms Race",
        lead_story="Phishing gets smarter, and security shifts to identity-first controls.",
        lead_details=(
            "Zero trust becomes default thinking: verify users, devices, and context for every sensitive action.",
            "AI-generated scams increase the value of MFA, device trust signals, and clear verification procedures.",
        ),
        also_watching=(
            "Deepfake voice scams are rising, so verification scripts are now operational necessities.",
            "Staff awareness training is no longer optional; it is an active security control.",
        ),
        tool_of_the_month="Authenticator app (Microsoft Authenticator or Google Authenticator).",
        next_steps=(
            "Enable MFA for email, banking, and admin tools this month.",
            "Adopt a verification phrase for phone requests that involve payments or account changes.",
        ),
        seo_keywords=(
            "phishing protection 2026",
            "MFA setup small business",
            "cybersecurity Palm Bay",
            "identity-first security",
            "IT support Melbourne Florida",
        ),
    ),
    MonthlyNewsletter(
        month_number=3,
        month_name="March",
        year=2026,
        theme="AI PCs and Local Inference",
        lead_story="NPUs make on-device AI a normal part of business operations.",
        lead_details=(
            "More features now run locally, including transcription, summarization, image edits, and personal assistants.",
            "The benefits are practical: lower cloud costs, stronger privacy controls, and faster response times.",
        ),
        also_watching=(
            "Hybrid workflows combine local inference with cloud reasoning for better cost and quality balance.",
            "Software vendors are optimizing new releases for NPU acceleration.",
        ),
        tool_of_the_month="Local transcription and meeting-notes workflow for recurring team meetings.",
        next_steps=(
            "Move at least one AI task to on-device processing, such as notes or transcription.",
            "Review privacy controls and define which data remains local versus what can go to cloud services.",
        ),
        seo_keywords=(
            "AI PC setup",
            "local inference business",
            "on-device AI privacy",
            "computer optimization Palm Bay",
            "managed IT Melbourne FL",
        ),
    ),
    MonthlyNewsletter(
        month_number=4,
        month_name="April",
        year=2026,
        theme="Robots in Real Businesses",
        lead_story="Robotics adoption scales first where ROI is measurable and immediate.",
        lead_details=(
            "Warehouses, healthcare teams, and logistics operations expand automation because throughput and error improvements are visible.",
            "Humanoid robotics is still early; specialized robots continue to deliver practical wins first.",
        ),
        also_watching=(
            "Service robotics expands in cleaning, delivery, and stocking workflows.",
            "Safety standards and compliance frameworks continue to evolve alongside deployments.",
        ),
        tool_of_the_month="Asset tracking and inventory management app for repeatable stock operations.",
        next_steps=(
            "Identify one repetitive physical task with high cost, such as returns, restocking, or inventory counts.",
            "Run a pilot with measurable metrics: time saved, error reduction, and safety incidents.",
        ),
        seo_keywords=(
            "business robotics ROI",
            "inventory automation",
            "IT consulting Palm Bay",
            "operations efficiency Melbourne FL",
            "technology planning Brevard County",
        ),
    ),
    MonthlyNewsletter(
        month_number=5,
        month_name="May",
        year=2026,
        theme="Customer Support Gets Rebuilt",
        lead_story="AI shifts support from ticket handling to end-to-end resolution pipelines.",
        lead_details=(
            "AI agents now classify issues, draft responses, route work, and escalate exceptions to humans.",
            "Strong outcomes depend on structured knowledge bases and clean service data, not raw chat alone.",
        ),
        also_watching=(
            "RAG-style retrieval architecture is becoming standard for support systems.",
            "Customer trust depends on transparent automation and reliable human handoff paths.",
        ),
        tool_of_the_month="Helpdesk plus knowledge base stack (Zendesk, Freshdesk, or Intercom-style).",
        next_steps=(
            "Create or refresh your top 25 support FAQs.",
            "Add clear handoff-to-human triggers and track deflection versus resolution quality.",
        ),
        seo_keywords=(
            "AI customer support workflow",
            "helpdesk optimization",
            "IT support Palm Bay",
            "small business support automation",
            "Melbourne FL tech services",
        ),
    ),
    MonthlyNewsletter(
        month_number=6,
        month_name="June",
        year=2026,
        theme="Privacy and Compliance Catch Up",
        lead_story="The AI data question becomes an unavoidable operating decision.",
        lead_details=(
            "Companies formalize which data can be used, stored, summarized, or shared across AI tools.",
            "Compliance is not only legal review; it is operational design embedded in daily workflows.",
        ),
        also_watching=(
            "Vendor risk management for AI platforms is becoming part of procurement.",
            "Audit logging is increasingly required as a product and governance feature.",
        ),
        tool_of_the_month="DLP-style controls and admin logging across your SaaS stack.",
        next_steps=(
            "Define a simple policy for data allowed and not allowed in AI tools.",
            "Enable admin audit logs for email, file sharing, CRM, and finance systems.",
        ),
        seo_keywords=(
            "AI compliance policy",
            "data governance small business",
            "admin audit logs",
            "cybersecurity Melbourne FL",
            "managed IT Palm Bay",
        ),
    ),
    MonthlyNewsletter(
        month_number=7,
        month_name="July",
        year=2026,
        theme="Post-Quantum Migration Planning",
        lead_story="Post-quantum readiness becomes a multi-year IT planning project.",
        lead_details=(
            "This is not panic work; it starts with inventory, dependency cleanup, and phased upgrade planning.",
            "Hybrid cryptography and staged rollouts are becoming the practical path for most organizations.",
        ),
        also_watching=(
            "Crypto agility (swapping algorithms safely) becomes a core engineering requirement.",
            "Vendor readiness for PQC is now a real software and infrastructure buying criterion.",
        ),
        tool_of_the_month="Asset inventory spreadsheet and dependency map for encryption touchpoints.",
        next_steps=(
            "List every system that uses encryption or certificates: VPN, email, websites, and business apps.",
            "Ask each key vendor for its post-quantum roadmap and expected migration timeline.",
        ),
        seo_keywords=(
            "post-quantum migration",
            "encryption inventory",
            "IT roadmap Palm Bay",
            "vendor security readiness",
            "Brevard County IT consulting",
        ),
    ),
    MonthlyNewsletter(
        month_number=8,
        month_name="August",
        year=2026,
        theme="Green Compute and Efficiency",
        lead_story="Energy cost becomes a hidden but critical constraint for AI deployment.",
        lead_details=(
            "Efficient models and better infrastructure choices protect budgets without reducing business output.",
            "On-device inference plus smaller models with smart routing is becoming a mainstream pattern.",
        ),
        also_watching=(
            "Data center growth and regional grid constraints influence long-term compute planning.",
            "Model distillation and optimization practices are entering normal operations.",
        ),
        tool_of_the_month="Cloud and AI usage cost dashboards with per-team visibility.",
        next_steps=(
            "Track AI spend as a separate budget line by team and application.",
            "Set budget alerts and define a model-routing policy based on cost and risk.",
        ),
        seo_keywords=(
            "AI cost optimization",
            "green compute strategy",
            "cloud usage dashboard",
            "IT cost control Palm Bay",
            "technology operations Melbourne FL",
        ),
    ),
    MonthlyNewsletter(
        month_number=9,
        month_name="September",
        year=2026,
        theme="The Interface Evolves",
        lead_story="Users increasingly express intents, while apps become execution layers.",
        lead_details=(
            "Voice, chat, and multimodal input are reshaping software away from menu navigation.",
            "Modern UI focuses more on confirmation, review, and exception handling than manual steps.",
        ),
        also_watching=(
            "Wearables and ambient computing create new interaction channels.",
            "Accessibility improvements accelerate as interfaces become more conversational.",
        ),
        tool_of_the_month="Screen recording and SOP builder for repeatable workflow capture.",
        next_steps=(
            "Record three repetitive staff workflows this month.",
            "Turn those recordings into SOPs to prepare for safe agent automation.",
        ),
        seo_keywords=(
            "multimodal interface trends",
            "workflow SOP automation",
            "digital operations Palm Bay",
            "IT productivity Melbourne FL",
            "business process optimization",
        ),
    ),
    MonthlyNewsletter(
        month_number=10,
        month_name="October",
        year=2026,
        theme="Fraud, Trust, and Verification",
        lead_story="Digital trust becomes a core product feature as synthetic fraud rises.",
        lead_details=(
            "As deepfakes improve, organizations must design for proof of identity and proof of intent.",
            "Clear trust signals and secure verification flows reduce chargebacks and support overhead.",
        ),
        also_watching=(
            "Verified business profiles and reputation systems gain more influence in buyer decisions.",
            "Higher-risk workflows are moving toward stronger KYC controls.",
        ),
        tool_of_the_month="Business verification and listing consistency monitoring tools.",
        next_steps=(
            "Add formal verification steps to all money-moving or account-changing workflows.",
            "Publish a simple customer-facing policy that explains how your team verifies requests.",
        ),
        seo_keywords=(
            "fraud prevention workflows",
            "business verification process",
            "trust signals local business",
            "cybersecurity Palm Bay",
            "customer protection Melbourne FL",
        ),
    ),
    MonthlyNewsletter(
        month_number=11,
        month_name="November",
        year=2026,
        theme="Automation for Small Business",
        lead_story="SMBs adopt agentic automation for measurable growth, not novelty.",
        lead_details=(
            "Lead response, booking, reminders, invoicing, and review requests now show immediate ROI when implemented well.",
            "Winning stacks are practical: CRM, messaging, automation, and clean structured data.",
        ),
        also_watching=(
            "AI calling and voice assistants continue to improve when guardrails are in place.",
            "Human approvals remain essential at high-impact workflow steps.",
        ),
        tool_of_the_month="CRM automations with pipelines, templates, and trigger logic.",
        next_steps=(
            "Launch a five-message follow-up sequence for new leads.",
            "Add intake forms that feed clean structured fields directly into your CRM.",
        ),
        seo_keywords=(
            "small business automation",
            "CRM workflow setup",
            "lead follow-up automation",
            "managed IT Palm Bay",
            "business growth Melbourne FL",
        ),
    ),
    MonthlyNewsletter(
        month_number=12,
        month_name="December",
        year=2026,
        theme="From Tools to Systems",
        lead_story="Year-end results confirm that systems outperform isolated features.",
        lead_details=(
            "The strongest performers are not using the flashiest models; they run reliable workflows with clear controls.",
            "Next year belongs to teams that track outcomes like time saved, revenue captured, and risk reduced.",
        ),
        also_watching=(
            "Consolidation accelerates: fewer tools, tighter integrations, better ownership.",
            "Agent governance matures with named owners, KPIs, and failure-handling standards.",
        ),
        tool_of_the_month="Quarterly technology audit checklist with owners and deadlines.",
        next_steps=(
            "Choose three automation KPIs: response time, conversion rate, and resolution rate.",
            "Decommission unused tools and standardize your stack before next year planning.",
        ),
        seo_keywords=(
            "automation KPI tracking",
            "technology stack consolidation",
            "IT audit checklist",
            "business IT strategy Palm Bay",
            "Melbourne FL managed services",
        ),
    ),
)


def main():
    for issue in NEWSLETTERS_2026:
        output_path, public_path = generate_pdf(issue)
        print(f"Generated: {output_path}")
        print(f"Published: {public_path}")


if __name__ == "__main__":
    main()
