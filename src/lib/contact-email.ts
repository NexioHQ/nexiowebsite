export const CONTACT_EMAIL_ADDRESS = "nexiogbl@gmail.com";

export interface ContactFormValues {
  name: string;
  email: string;
  country: string;
  phone: string;
  service: string;
  message: string;
}

export function createContactMailtoUrl({
  name,
  email,
  country,
  phone,
  service,
  message,
}: ContactFormValues) {
  const subject = `New message from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Country: ${country}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  return `mailto:${CONTACT_EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
