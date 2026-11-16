"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { contact } from "@/lib/contact";

const roles = [
  "Full Stack Developer",
  "SaaS Developer",
  "Web Application Developer",
];

const riseIn = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function ReactMark() {
  return (
    <svg
      aria-hidden="true"
      className="tech-react-mark"
      viewBox="0 0 32 32"
      fill="none"
    >
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="13"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(120 16 16)"
      />
    </svg>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <main>
      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-light hero-light-one" aria-hidden="true" />
        <div className="hero-light hero-light-two" aria-hidden="true" />

        <div className="hero-layout">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: prefersReducedMotion ? 0 : 0.12,
              delayChildren: prefersReducedMotion ? 0 : 0.12,
            }}
          >
            <motion.div className="hero-eyebrow" variants={riseIn}>
              <span className="eyebrow-line" aria-hidden="true" />
              <span>Hello, I&apos;m {contact.name}</span>
              <span className="wave-emoji" aria-hidden="true">
                👋
              </span>
            </motion.div>

            <motion.div
              className="hero-location"
              variants={riseIn}
              transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
            >
              <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
              Coimbatore, Tamil Nadu, India
            </motion.div>

            <motion.h1
              className="hero-title"
              id="hero-title"
              variants={riseIn}
              transition={{ duration: prefersReducedMotion ? 0 : 0.65 }}
            >
              Building
              <br />
              <span className="gradient-text">Digital Experiences</span>
              <br />
              That Drive
              <br />
              <span className="gradient-text">Businesses Forward.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={riseIn}
              transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
            >
              I&apos;m a Full Stack &amp; SaaS Developer passionate about
              building modern websites, scalable applications and digital
              products that solve real business problems.
            </motion.p>

            <motion.div
              className="hero-role"
              variants={riseIn}
              aria-label={`I am a ${roles[roleIndex]}`}
            >
              <span className="role-prefix">I build as a</span>
              <span className="role-value" aria-hidden="true">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.22,
                    }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.div className="hero-actions" variants={riseIn}>
              <a className="button-primary" href="#contact">
                Let&apos;s work together
                <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a className="button-secondary" href="#projects">
                Explore my work
                <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div className="hero-availability" variants={riseIn}>
              <span className="availability-pulse" aria-hidden="true" />
              <span>Available for freelance projects</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="portrait-stage"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="portrait-orbit portrait-orbit-one" aria-hidden="true">
              <span />
            </div>
            <div className="portrait-orbit portrait-orbit-two" aria-hidden="true">
              <span />
            </div>
            <div className="portrait-card">
              <div className="portrait-card-top">
                <span className="portrait-index">01 / DEVELOPER</span>
                <Sparkles size={16} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div
                className="portrait-art"
              >
                <Image
                  src="/images/profile.png"
                  alt={`${contact.name}, Full Stack & SaaS Developer`}
                  fill
                  priority
                  sizes="(max-width: 760px) 84vw, (max-width: 1100px) 42vw, 430px"
                  className="portrait-photo"
                />
              </div>
              <div className="portrait-card-bottom">
                <div>
                  <span className="portrait-label">MAKING IDEAS</span>
                  <span className="portrait-value">work beautifully.</span>
                </div>
                <span className="portrait-star" aria-hidden="true">
                  ✳
                </span>
              </div>
            </div>

            <motion.div
              className="tech-badge tech-badge-react"
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ReactMark />
              <span>React</span>
            </motion.div>
            <motion.div
              className="tech-badge tech-badge-next"
              animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.35,
              }}
            >
              <span className="next-mark" aria-hidden="true">
                N
              </span>
              <span>Next.js</span>
            </motion.div>
            <motion.div
              className="tech-badge tech-badge-node"
              animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            >
              <span className="node-mark" aria-hidden="true">
                JS
              </span>
              <span>Node.js</span>
            </motion.div>
            <div className="portrait-note">
              <span className="note-line" aria-hidden="true" />
              Digital craft, with purpose.
            </div>
          </motion.div>
        </div>

        <a className="scroll-cue" href="#about" aria-label="Scroll to About">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
