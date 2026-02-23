export const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
export const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
export const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const isEmailJsConfigured =
  Boolean(emailServiceId) &&
  Boolean(emailTemplateId) &&
  Boolean(emailPublicKey);
