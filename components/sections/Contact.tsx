"use client";

import {
  type FormEvent,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { contact, getProjectEnquiryMessage, getWhatsAppUrl } from "@/lib/contact";
import { serviceQuoteEventName, services } from "@/lib/services";
import BrandIcon from "@/components/ui/BrandIcon";

type FormFeedback = {
  type: "success" | "error";
  message: string;
};

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);
  const serviceFromUrl = useSyncExternalStore(
    (callback) => {
      window.addEventListener("popstate", callback);
      return () => window.removeEventListener("popstate", callback);
    },
    () => new URLSearchParams(window.location.search).get("service") ?? "",
    () => "",
  );
  const defaultService = services.some((service) => service.id === serviceFromUrl)
    ? serviceFromUrl
    : "";

  useEffect(() => {
    const selectQuotedService = (event: Event) => {
      const serviceId = (event as CustomEvent<string>).detail;
      if (services.some((service) => service.id === serviceId)) {
        setSelectedService(serviceId);
      }
    };
    const resetSelectedService = () => setSelectedService("");

    window.addEventListener(serviceQuoteEventName, selectQuotedService);
    window.addEventListener("popstate", resetSelectedService);
    return () => {
      window.removeEventListener(serviceQuoteEventName, selectQuotedService);
      window.removeEventListener("popstate", resetSelectedService);
    };
  }, []);

  const emailHref = `mailto:${contact.email}`;
  const whatsappHref = getWhatsAppUrl();

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    const formData = new FormData(event.currentTarget);
    const serviceId = String(formData.get("service") ?? "");
    const serviceName =
      services.find((service) => service.id === serviceId)?.title ?? "";
    const url = getWhatsAppUrl(
      getProjectEnquiryMessage({
        customerName: String(formData.get("name") ?? "").trim(),
        customerEmail: String(formData.get("email") ?? "").trim(),
        selectedService: serviceName,
        budget: String(formData.get("budget") ?? "").trim(),
        projectDescription: String(formData.get("description") ?? "").trim(),
      }),
    );

    if (!url || !serviceName) {
      setFeedback({
        type: "error",
        message:
          "The enquiry link is not configured correctly. Please contact me by email instead.",
      });
      return;
    }

    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      setFeedback({
        type: "error",
        message:
          "Your browser blocked the WhatsApp window. Please allow pop-ups or use the WhatsApp contact link below.",
      });
      return;
    }
    newWindow.opener = null;

    setFeedback({
      type: "success",
      message:
        "Your WhatsApp enquiry draft is ready. Review it in WhatsApp and send it when you’re ready.",
    });
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-ambient" aria-hidden="true" />
      <div className="contact-inner">
        <header className="contact-heading">
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            Get in touch
          </p>
          <h2 className="section-title" id="contact-title">
            Let&apos;s Talk About{" "}
            <span className="section-gradient">Your Project.</span>
          </h2>
          <p>
            Tell me what you&apos;re planning, and I&apos;ll get back to you to
            discuss the next steps.
          </p>
        </header>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={submitEnquiry}>
            <div className="contact-fields">
              <label>
                Your name
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
              <label>
                Service
                <select
                  name="service"
                  value={selectedService || defaultService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Budget
                <input
                  name="budget"
                  placeholder="e.g. ₹10,000–₹20,000"
                  required
                />
              </label>
              <label className="contact-description-field">
                Project description
                <textarea
                  name="description"
                  placeholder="A few details about what you need..."
                  required
                  rows={5}
                />
              </label>
            </div>
            <button className="contact-submit" type="submit">
              Send enquiry on WhatsApp
              <MessageCircle size={16} aria-hidden="true" />
            </button>
            <p className="contact-form-note">
              This opens a prefilled WhatsApp draft. Review and send it there;
              this form does not send an email.
            </p>
            {feedback && (
              <p
                className={`contact-feedback contact-feedback-${feedback.type}`}
                role="status"
                aria-live="polite"
              >
                {feedback.message}
              </p>
            )}
          </form>

          <aside className="contact-details">
            <span className="contact-details-icon" aria-hidden="true">
              <Mail size={20} />
            </span>
            <h3>Prefer a direct message?</h3>
            <p>
              Reach out by email or WhatsApp, or connect with me on LinkedIn
              and GitHub.
            </p>
            {emailHref ? (
              <a className="contact-detail-link" href={emailHref}>
                <Mail size={16} aria-hidden="true" />
                {contact.email}
              </a>
            ) : (
              <p className="contact-config-error">
                Email contact is unavailable due to a configuration issue.
              </p>
            )}
            {whatsappHref ? (
              <a
                className="contact-detail-link"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : (
              <p className="contact-config-error">
                WhatsApp contact is unavailable due to a configuration issue.
              </p>
            )}
            <div className="contact-social-links" aria-label="Social profiles">
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <BrandIcon brand="linkedin" />
              </a>
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <BrandIcon brand="github" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
