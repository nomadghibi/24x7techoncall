#!/usr/bin/env python3
from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from shutil import copy2
from typing import Iterable

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
)


@dataclass(frozen=True)
class Section:
    heading: str
    paragraphs: tuple[str, ...]
    bullets: tuple[str, ...] = ()


@dataclass(frozen=True)
class Newsletter:
    slug: str
    title: str
    subtitle: str
    issue_label: str
    publish_date: str
    seo_keywords: tuple[str, ...]
    sections: tuple[Section, ...]
    call_to_action: str


BASE_DIR = Path(__file__).resolve().parents[1]
OUTPUT_DIR = BASE_DIR / "output" / "pdf"
PUBLIC_DIR = BASE_DIR / "public" / "newsletters"


def build_styles() -> dict[str, ParagraphStyle]:
    styles = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "NewsletterTitle",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=27,
            textColor=colors.HexColor("#0f172a"),
            spaceAfter=10,
        ),
        "subtitle": ParagraphStyle(
            "NewsletterSubtitle",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#334155"),
            spaceAfter=8,
        ),
        "meta": ParagraphStyle(
            "NewsletterMeta",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=colors.HexColor("#475569"),
            spaceAfter=6,
        ),
        "h2": ParagraphStyle(
            "NewsletterH2",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=14,
            leading=18,
            textColor=colors.HexColor("#1d4ed8"),
            spaceBefore=8,
            spaceAfter=4,
        ),
        "body": ParagraphStyle(
            "NewsletterBody",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=colors.HexColor("#0f172a"),
            spaceAfter=7,
        ),
        "cta": ParagraphStyle(
            "NewsletterCTA",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=15,
            textColor=colors.HexColor("#0f172a"),
            backColor=colors.HexColor("#e2e8f0"),
            borderPadding=8,
            borderColor=colors.HexColor("#cbd5e1"),
            borderWidth=1,
            borderRadius=3,
            spaceBefore=10,
            spaceAfter=6,
        ),
    }


def footer_drawer(issue_label: str, title: str, seo_keywords: Iterable[str]):
    keywords = ", ".join(seo_keywords)

    def _draw(canvas, doc):
        canvas.saveState()
        canvas.setTitle(title)
        canvas.setAuthor("Best Computer Tech LLC")
        canvas.setSubject(issue_label)
        canvas.setKeywords(keywords)
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(colors.HexColor("#475569"))
        canvas.drawString(doc.leftMargin, 0.45 * inch, f"{issue_label} | BestComputerTec.com")
        canvas.drawRightString(LETTER[0] - doc.rightMargin, 0.45 * inch, f"Page {doc.page}")
        canvas.restoreState()

    return _draw


def newsletter_story(newsletter: Newsletter, style_map: dict[str, ParagraphStyle]):
    story = [
        Paragraph(newsletter.title, style_map["title"]),
        Paragraph(newsletter.subtitle, style_map["subtitle"]),
        Paragraph(f"Issue: {newsletter.issue_label} | Published: {newsletter.publish_date}", style_map["meta"]),
        Paragraph(
            "SEO keywords focus: " + ", ".join(newsletter.seo_keywords),
            style_map["meta"],
        ),
        Spacer(1, 0.1 * inch),
    ]

    for section in newsletter.sections:
        story.append(Paragraph(section.heading, style_map["h2"]))
        for paragraph in section.paragraphs:
            story.append(Paragraph(paragraph, style_map["body"]))
        if section.bullets:
            bullet_flow = ListFlowable(
                [
                    ListItem(Paragraph(item, style_map["body"]), leftIndent=8)
                    for item in section.bullets
                ],
                bulletType="bullet",
                bulletFontName="Helvetica",
                bulletFontSize=10,
                leftIndent=18,
                spaceBefore=2,
                spaceAfter=6,
            )
            story.append(bullet_flow)

    story.append(Spacer(1, 0.08 * inch))
    story.append(Paragraph(newsletter.call_to_action, style_map["cta"]))
    return story


def generate_pdf(newsletter: Newsletter):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    output_path = OUTPUT_DIR / f"{newsletter.slug}.pdf"
    public_path = PUBLIC_DIR / f"{newsletter.slug}.pdf"
    styles = build_styles()
    story = newsletter_story(newsletter, styles)

    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=LETTER,
        leftMargin=0.8 * inch,
        rightMargin=0.8 * inch,
        topMargin=0.8 * inch,
        bottomMargin=0.7 * inch,
        title=newsletter.title,
        author="Best Computer Tech LLC",
        subject=newsletter.issue_label,
    )
    on_page = footer_drawer(newsletter.issue_label, newsletter.title, newsletter.seo_keywords)
    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
    copy2(output_path, public_path)
    return output_path, public_path


NEWSLETTERS = (
    Newsletter(
        slug="best-computer-tech-newsletter-2026-q1-local-security-performance",
        title="Best Computer Tech Newsletter - 2026 Q1",
        subtitle=(
            "Local computer repair and IT support guidance for Palm Bay and Melbourne, Florida. "
            "This issue focuses on security hardening and performance recovery."
        ),
        issue_label="2026 Q1 Local Security and Performance Brief",
        publish_date="January 2026",
        seo_keywords=(
            "computer repair Palm Bay",
            "IT support Melbourne FL",
            "virus removal Palm Bay",
            "computer tune up Melbourne",
            "small business IT support Brevard County",
        ),
        sections=(
            Section(
                heading="1) Local IT Snapshot: What Changed in Early 2026",
                paragraphs=(
                    "Customers across Palm Bay and Melbourne are dealing with the same pattern: slower endpoints, more phishing attempts, and inconsistent backup quality. "
                    "Most incidents are avoidable with a stronger monthly maintenance cycle and better staff awareness.",
                    "For local households and small businesses, the highest ROI still comes from basics done consistently: patching, MFA, backup testing, and startup cleanup. "
                    "A disciplined baseline reduces emergency tickets and stabilizes daily operations.",
                ),
            ),
            Section(
                heading="2) Security Baseline for Home and Small Business Environments",
                paragraphs=(
                    "Whether your team uses Microsoft 365 or Google Workspace, account security is now your first line of defense. "
                    "Most account takeover incidents begin with weak passwords and no multi factor authentication.",
                    "Endpoint protection should also be layered. Antivirus alone is no longer enough for many environments. "
                    "Email filtering, browser hardening, and clear user reporting steps are now standard expectations.",
                ),
                bullets=(
                    "Enable MFA for all email and admin accounts",
                    "Remove stale user accounts and shared credentials",
                    "Set automatic OS and browser update windows",
                    "Block risky attachment types where possible",
                    "Run monthly phishing awareness reminders for staff",
                ),
            ),
            Section(
                heading="3) Performance Recovery: Fast Wins That Lower Support Costs",
                paragraphs=(
                    "Many performance tickets in Palm Bay and Melbourne are linked to startup bloat, low free disk space, and overdue patching. "
                    "A 30 to 45 minute maintenance pass often restores noticeable speed without hardware replacement.",
                    "When devices are older, SSD upgrades and memory planning still deliver the best cost to performance ratio. "
                    "Hardware decisions should be based on work profile, not vendor marketing specs.",
                ),
                bullets=(
                    "Keep at least 20 percent free storage on primary drives",
                    "Audit startup apps every quarter",
                    "Confirm backup jobs before major OS changes",
                    "Document slow app behavior with timestamps for faster diagnostics",
                ),
            ),
            Section(
                heading="4) Local SEO Signals for Service Businesses in 2026",
                paragraphs=(
                    "Search visibility for service providers now depends heavily on local relevance and trust signals. "
                    "For computer repair in Palm Bay and IT support in Melbourne FL, publish practical content tied to real local questions and service intent.",
                    "Keep service pages updated with accurate scope, business hours, and response expectations. "
                    "Inconsistent claims reduce trust and can hurt conversion quality even if rankings hold.",
                ),
                bullets=(
                    "Use service area language consistently: Palm Bay, Melbourne, and Brevard County",
                    "Refresh FAQ blocks with real customer support questions",
                    "Publish one practical how to or checklist article each month",
                    "Link newsletter insights to relevant service pages",
                ),
            ),
            Section(
                heading="5) Quarterly Action Plan",
                paragraphs=(
                    "If you want fewer incidents in Q2, schedule a baseline review now. "
                    "This includes endpoint health checks, account protection review, backup validation, and response process cleanup.",
                    "Documenting this baseline once per quarter reduces repeated issues and improves pricing predictability for both residential and managed IT plans.",
                ),
            ),
        ),
        call_to_action=(
            "Need help implementing this checklist? Contact Best Computer Tech at (321) 953-5199 or visit bestcomputertec.com/contact "
            "for local computer repair in Palm Bay and IT support in Melbourne, FL."
        ),
    ),
    Newsletter(
        slug="best-computer-tech-newsletter-2026-q2-ai-backup-cybersecurity",
        title="Best Computer Tech Newsletter - 2026 Q2",
        subtitle=(
            "Practical AI adoption, backup resilience, and cybersecurity planning for local businesses. "
            "Built for teams that need clear priorities and measurable outcomes."
        ),
        issue_label="2026 Q2 AI, Backup, and Cybersecurity Operations Brief",
        publish_date="April 2026",
        seo_keywords=(
            "managed IT services Palm Bay",
            "business cybersecurity Melbourne FL",
            "data backup and recovery Brevard County",
            "IT consulting Palm Bay",
            "small business network security Florida",
        ),
        sections=(
            Section(
                heading="1) AI Adoption: Focus on Workflow, Not Hype",
                paragraphs=(
                    "In 2026, the strongest AI outcomes come from targeted workflow improvements, not broad tool rollouts. "
                    "Teams should begin with one high friction process, define metrics, and keep human approval in place.",
                    "For local service businesses, high value use cases include ticket triage drafts, client communication templates, and documentation summaries. "
                    "These uses improve speed while keeping accountability with your team.",
                ),
                bullets=(
                    "Pick one process with measurable delay or rework",
                    "Set baseline metrics before launch",
                    "Require human review for customer facing responses",
                    "Review accuracy and policy compliance weekly",
                ),
            ),
            Section(
                heading="2) Backup Strategy: 3-2-1-1-0 in Real Operations",
                paragraphs=(
                    "Backup quality is judged by recovery success, not by storage volume. "
                    "A reliable plan uses multiple copies, multiple media types, offsite protection, and routine restore testing.",
                    "Small business incidents in Brevard County often reveal gaps in restore readiness. "
                    "Quarterly recovery tests should be non negotiable for financial records, customer files, and critical collaboration data.",
                ),
                bullets=(
                    "Maintain 3 copies of important data",
                    "Use 2 different storage media",
                    "Keep 1 copy offsite and 1 immutable where possible",
                    "Target 0 restore test errors each quarter",
                ),
            ),
            Section(
                heading="3) Cybersecurity Priorities for Q2 2026",
                paragraphs=(
                    "Threat activity continues to prioritize credential theft and social engineering. "
                    "Most successful attacks combine email deception with weak identity controls.",
                    "Local businesses can materially reduce risk through role based access, mailbox protection, and incident response runbooks. "
                    "Fast escalation paths prevent small events from becoming long outages.",
                ),
                bullets=(
                    "Enforce MFA and conditional access on high risk sign ins",
                    "Disable legacy authentication where possible",
                    "Run monthly mailbox rule and forwarding audits",
                    "Keep a written incident response contact tree",
                ),
            ),
            Section(
                heading="4) Network and Endpoint Governance",
                paragraphs=(
                    "As hybrid work continues, network consistency matters as much as endpoint security. "
                    "Segmenting business critical systems and standardizing remote access reduces support complexity and lateral movement risk.",
                    "Patch compliance should be tracked by exception, not by assumptions. "
                    "If exceptions are unresolved for more than 30 days, they should be escalated to leadership.",
                ),
                bullets=(
                    "Separate guest, IoT, and business device networks",
                    "Track patch exceptions with due dates and owners",
                    "Standardize endpoint baseline across all users",
                    "Review admin privileges quarterly",
                ),
            ),
            Section(
                heading="5) Measurement Framework for Leadership",
                paragraphs=(
                    "Leadership needs operational KPIs tied to business outcomes. "
                    "Useful metrics include first response time, repeat incident rate, restore success rate, and unresolved high severity tickets.",
                    "Tracking these consistently creates a practical roadmap for managed IT investments and staffing decisions in the second half of 2026.",
                ),
                bullets=(
                    "First response SLA attainment",
                    "Monthly incident volume by category",
                    "Restore test success and recovery duration",
                    "Security exception closure rate",
                ),
            ),
        ),
        call_to_action=(
            "If your business needs a clearer 2026 IT roadmap, call Best Computer Tech at (321) 953-5199. "
            "We provide managed IT services, cybersecurity, and data recovery support for Palm Bay, Melbourne, and surrounding Brevard County locations."
        ),
    ),
)


def main():
    for newsletter in NEWSLETTERS:
        output_path, public_path = generate_pdf(newsletter)
        print(f"Generated: {output_path}")
        print(f"Published: {public_path}")


if __name__ == "__main__":
    main()
