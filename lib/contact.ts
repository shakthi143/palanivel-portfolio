export type ContactConfiguration = {
  name: string;
  monogram: string;
  email: string;
  whatsappNumber: string;
  linkedinUrl: string;
  githubUrl: string;
};

export const contact: ContactConfiguration = {
  name: "Palanivel M.",
  monogram: "PM",
  email: "shakthishakthivel555@gmail.com",
  whatsappNumber: "919003805595",
  linkedinUrl: "https://www.linkedin.com/in/palanivel-m-b6a558258/",
  githubUrl: "https://github.com/shakthi143",
};

export type ProjectEnquiry = {
  customerName: string;
  customerEmail: string;
  selectedService: string;
  budget: string;
  projectDescription: string;
};

export function getWhatsAppUrl(message?: string): string | null {
  if (!/^\d{8,15}$/.test(contact.whatsappNumber)) return null;

  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${contact.whatsappNumber}${query}`;
}

export function getProjectEnquiryMessage(enquiry: ProjectEnquiry): string {
  return [
    `Project enquiry for ${contact.name}`,
    "",
    `Customer name: ${enquiry.customerName}`,
    `Customer email: ${enquiry.customerEmail}`,
    `Selected service: ${enquiry.selectedService}`,
    `Budget: ${enquiry.budget}`,
    `Project description: ${enquiry.projectDescription}`,
  ].join("\n");
}

export function getEmailHref(subject: string): string | null {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) return null;

  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
