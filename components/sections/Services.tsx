"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import Link from "next/link";
import { serviceQuoteEventName, services } from "@/lib/services";

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="services-section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="services-ambient services-ambient-one" aria-hidden="true" />
      <div className="services-ambient services-ambient-two" aria-hidden="true" />

      <div className="services-inner">
        <motion.header
          className="services-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
        >
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            What I offer
          </p>
          <h2 className="section-title services-title" id="services-title">
            Services That Turn{" "}
            <span className="section-gradient">Ideas Into Reality.</span>
          </h2>
          <p className="services-description">
            From business websites to scalable software applications, I help
            businesses build powerful digital experiences.
          </p>
        </motion.header>

        <div className="services-carousel-hint" aria-hidden="true">
          <span>Swipe to explore</span>
          <MoveRight size={17} strokeWidth={1.7} />
        </div>

        <div
          className="services-grid"
          role="region"
          aria-label="Services, scroll horizontally to explore"
          tabIndex={0}
        >
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const quoteHref = `/?service=${encodeURIComponent(service.id)}#contact`;

            return (
              <motion.article
                className="service-card"
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true">
                    <ServiceIcon size={19} strokeWidth={1.7} />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>

                <ul
                  className="service-deliverables"
                  aria-label={`${service.title} deliverables`}
                >
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <Check size={13} strokeWidth={1.8} aria-hidden="true" />
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <div className="service-card-bottom">
                  <strong className="service-quote-label">Custom Quote</strong>
                  <Link
                    className="service-quote-button"
                    href={quoteHref}
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent(serviceQuoteEventName, {
                          detail: service.id,
                        }),
                      )
                    }
                  >
                    Get a quote
                    <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          className="services-cta"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            delay: prefersReducedMotion ? 0 : 0.08,
          }}
        >
          <span className="services-cta-orb" aria-hidden="true" />
          <div className="services-cta-copy">
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              Let&apos;s make it happen
            </p>
            <h3>Have a Project in Mind?</h3>
            <p>
              Let&apos;s discuss your requirements and create something
              meaningful together.
            </p>
          </div>
          <a className="services-cta-button" href="#contact">
            Start a Project
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </motion.aside>

      </div>
    </section>
  );
}
