import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { contact, getWhatsAppUrl } from "@/lib/contact";
import BrandIcon from "@/components/ui/BrandIcon";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const emailHref = `mailto:${contact.email}`;
  const whatsappHref = getWhatsAppUrl();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">
          {contact.name}
        </a>
        <p>Full Stack &amp; SaaS Developer · Coimbatore, Tamil Nadu, India</p>
        <nav className="footer-links" aria-label="Contact links">
          {emailHref && (
            <a href={emailHref} aria-label={`Email ${contact.name}`}>
              <Mail size={16} />
            </a>
          )}
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${contact.name}`}
            >
              <MessageCircle size={16} />
            </a>
          )}
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <BrandIcon brand="linkedin" size={16} />
          </a>
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <BrandIcon brand="github" size={16} />
          </a>
        </nav>
        <span className="footer-copyright">
          © {currentYear} {contact.name} ·{" "}
          <a href="#home">
            Back to top <ArrowUp size={12} aria-hidden="true" />
          </a>
        </span>
      </div>
    </footer>
  );
}
