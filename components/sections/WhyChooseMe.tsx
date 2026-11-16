"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";
import { testimonials } from "@/lib/testimonials";

const trustPoints = [
  {
    icon: BriefcaseBusiness,
    title: "Business-Focused Solutions",
    description:
      "I focus on building solutions that address real business requirements.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
    description:
      "I use modern frameworks and tools to build maintainable applications.",
  },
  {
    icon: MessageCircle,
    title: "Responsive Communication",
    description:
      "I provide clear project updates and communicate throughout development.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Delivery",
    description:
      "I focus on testing, usability, maintainability and reliable delivery.",
  },
];

export default function WhyChooseMe() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {testimonials.length > 0 && (
        <section
          className="testimonials-section"
          aria-labelledby="testimonials-title"
        >
          <div className="trust-inner">
            <h2 className="section-title" id="testimonials-title">
              Client <span className="section-gradient">Testimonials.</span>
            </h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <figure className="testimonial-card" key={testimonial.id}>
                  <blockquote>{testimonial.quote}</blockquote>
                  <figcaption>
                    <span>{testimonial.name}</span>
                    {testimonial.role && <span>{testimonial.role}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        className="why-choose-section"
        id="why-choose-me"
        aria-labelledby="why-choose-title"
      >
        <div className="trust-ambient" aria-hidden="true" />
        <div className="trust-inner">
          <motion.header
            className="why-choose-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
          >
            <p className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden="true" />
              A thoughtful way to build
            </p>
            <h2 className="section-title" id="why-choose-title">
              Why <span className="section-gradient">Choose Me?</span>
            </h2>
          </motion.header>

          <div className="trust-grid">
            {trustPoints.map((point, index) => {
              const TrustIcon = point.icon;

              return (
                <motion.article
                  className="trust-card"
                  key={point.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.48,
                    delay: prefersReducedMotion ? 0 : index * 0.07,
                  }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                >
                  <span className="trust-card-icon" aria-hidden="true">
                    <TrustIcon size={20} strokeWidth={1.7} />
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            className="final-cta"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.55,
              delay: prefersReducedMotion ? 0 : 0.08,
            }}
          >
            <div className="final-cta-copy">
              <p className="section-eyebrow">
                <span className="section-eyebrow-line" aria-hidden="true" />
                Let&apos;s create something meaningful
              </p>
              <h2>Have an Idea? Let&apos;s Build It Together.</h2>
              <p>
                Whether you need a business website, custom web application or
                SaaS product, let&apos;s discuss your project.
              </p>
            </div>
            <a className="final-cta-button" href="#contact">
              Let&apos;s Discuss Your Project
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
