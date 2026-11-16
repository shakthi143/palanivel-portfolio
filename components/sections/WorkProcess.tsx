"use client";

import { motion, useReducedMotion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand business goals, project requirements, target audience and expected outcomes.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Define project scope, user experience, application structure and development roadmap.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build responsive interfaces, backend functionality and database integrations with regular progress updates.",
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "Test functionality, fix issues, optimize performance and deploy the completed project.",
  },
];

export default function WorkProcess() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="work-process-section"
      id="work-process"
      aria-labelledby="work-process-title"
    >
      <div className="work-process-ambient" aria-hidden="true" />
      <div className="work-process-inner">
        <motion.header
          className="work-process-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
        >
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            My work process
          </p>
          <h2 className="section-title" id="work-process-title">
            From Idea <span className="section-gradient">to Launch.</span>
          </h2>
          <p className="work-process-description">
            A clear and collaborative process to transform your ideas into
            reliable digital products.
          </p>
        </motion.header>

        <ol className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.li
              className="process-step"
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.48,
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
            >
              <span className="process-step-number">{step.number}</span>
              <article className="process-step-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
