"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/contact";

const aboutImageSrc: string | null = null;
const identityName = "PALANIVEL M.";
const rainAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]";
const rainColumns = Array.from({ length: 22 }, (_, column) => ({
  left: `${(column / 21) * 100}%`,
  duration: `${1.2 + (column % 5) * 0.18}s`,
  delay: `${(column % 6) * -0.2}s`,
  characters: Array.from(
    { length: 9 },
    (_, row) =>
      rainAlphabet[(column * 13 + row * 7 + column * row) % rainAlphabet.length],
  ),
}));

const highlights = [
  "Full Stack Development",
  "SaaS Application Development",
  "Modern Web Experiences",
];

const journey = [
  {
    title: "Electronics & Communication Engineering",
    detail: "Building a foundation in engineering and problem-solving.",
  },
  {
    title: "Full-stack application development",
    detail: "Bringing responsive interfaces and backend systems together.",
  },
  {
    title: "SaaS product development",
    detail: "Creating practical digital products for real-world needs.",
  },
  {
    title: "Continuous learning",
    detail: "Growing through hands-on software engineering practice.",
  },
];

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const identityCardRef = useRef<HTMLDivElement>(null);
  const [identityPhase, setIdentityPhase] = useState<
    "idle" | "rain" | "revealed"
  >("idle");
  const revealTransition = {
    duration: prefersReducedMotion ? 0 : 0.6,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  useEffect(() => {
    const identityCard = identityCardRef.current;
    if (!identityCard) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIdentityPhase(prefersReducedMotion ? "revealed" : "rain");
          observer.unobserve(identityCard);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(identityCard);

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (identityPhase !== "rain") return;

    const timeoutId = window.setTimeout(() => {
      setIdentityPhase("revealed");
    }, 1900);

    return () => window.clearTimeout(timeoutId);
  }, [identityPhase]);

  const replayIdentityReveal = () => {
    setIdentityPhase(prefersReducedMotion ? "revealed" : "rain");
  };

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-layout">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
        >
          <div className="about-visual-glow" aria-hidden="true" />
          <div className="about-frame">
            {aboutImageSrc ? (
              <Image
                className="about-photo"
                src={aboutImageSrc}
                alt={`${contact.name}, Full Stack and SaaS Developer`}
                fill
                sizes="(max-width: 820px) 84vw, 42vw"
              />
            ) : (
              <div
                className={`about-placeholder identity-card identity-card-${identityPhase}`}
                ref={identityCardRef}
                aria-label={`${identityName}, Full Stack & SaaS Developer`}
              >
                <span className="identity-card-label" aria-hidden="true">
                  DEVELOPER IDENTITY
                </span>
                <button
                  className="identity-replay"
                  type="button"
                  aria-label="Replay name reveal animation"
                  onClick={replayIdentityReveal}
                >
                  <RotateCcw size={15} strokeWidth={1.7} aria-hidden="true" />
                </button>
                <div className="identity-rain" aria-hidden="true">
                  {rainColumns.map((column, columnIndex) => (
                    <span
                      className="identity-rain-column"
                      key={columnIndex}
                      style={{
                        left: column.left,
                        animationDuration: column.duration,
                        animationDelay: column.delay,
                      }}
                    >
                      {column.characters.map((character, characterIndex) => (
                        <span key={characterIndex}>{character}</span>
                      ))}
                    </span>
                  ))}
                </div>
                <div className="identity-reveal">
                  <h3
                    className="identity-name-letters"
                    aria-label={identityName}
                  >
                    {identityName.split("").map((character, index) => (
                      <span
                        key={`${character}-${index}`}
                        aria-hidden="true"
                        style={{ animationDelay: `${index * 65}ms` }}
                      >
                        {character === " " ? "\u00a0" : character}
                      </span>
                    ))}
                  </h3>
                  <span className="identity-role">
                    FULL STACK &amp; SAAS DEVELOPER
                  </span>
                </div>
              </div>
            )}
          </div>
          <motion.div
            className="about-code-float"
            animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          >
            <Code2 size={17} strokeWidth={1.7} />
            <span>Building with purpose</span>
          </motion.div>
          <span className="about-visual-spark" aria-hidden="true">
            <Sparkles size={18} strokeWidth={1.4} />
          </span>
          <span className="about-visual-index" aria-hidden="true">
            COIMBATORE · INDIA
          </span>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...revealTransition, delay: prefersReducedMotion ? 0 : 0.08 }}
        >
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            About me
          </p>
          <h2 className="section-title about-title" id="about-title">
            Turning Ideas Into{" "}
            <span className="section-gradient">Powerful Digital Experiences.</span>
          </h2>
          <div className="about-description">
            <p>
              I&apos;m {contact.name}, a Full Stack &amp; SaaS Developer passionate
              about building modern web applications and digital products.
            </p>
            <p>
              I enjoy transforming ideas into functional, user-friendly
              software solutions. From responsive websites to full-stack
              applications and SaaS platforms, I focus on writing clean code
              and creating meaningful digital experiences.
            </p>
            <p>
              I work with modern frontend and backend technologies to build
              scalable applications, intuitive interfaces and practical
              business solutions.
            </p>
          </div>

          <ul className="about-highlights" aria-label="Areas of focus">
            {highlights.map((highlight, index) => (
              <motion.li
                key={highlight}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  ...revealTransition,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                }}
              >
                <span className="highlight-check" aria-hidden="true">
                  <span />
                </span>
                {highlight}
              </motion.li>
            ))}
          </ul>

          <a className="about-cta" href="#contact">
            Let&apos;s build something together
            <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="journey-block"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={revealTransition}
      >
        <div className="journey-heading">
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            The journey so far
          </p>
          <h3 className="journey-title">Curiosity, shaped into craft.</h3>
        </div>
        <ol className="journey-list">
          {journey.map((step, index) => (
            <motion.li
              className="journey-item"
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                ...revealTransition,
                delay: prefersReducedMotion ? 0 : index * 0.07,
              }}
            >
              <span className="journey-marker" aria-hidden="true">
                <span />
              </span>
              <span className="journey-step">0{index + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.detail}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
