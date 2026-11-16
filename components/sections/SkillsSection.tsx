"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Braces, Code2, Database, GitBranch } from "lucide-react";

type Skill = {
  name: string;
  mark: string;
  tone: string;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: typeof Code2;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces built for people and the web.",
    icon: Code2,
    skills: [
      { name: "React", mark: "⚛", tone: "react" },
      { name: "Next.js", mark: "N", tone: "next" },
      { name: "JavaScript", mark: "JS", tone: "javascript" },
      { name: "TypeScript", mark: "TS", tone: "typescript" },
      { name: "HTML5", mark: "5", tone: "html" },
      { name: "CSS3", mark: "3", tone: "css" },
      { name: "Tailwind CSS", mark: "≋", tone: "tailwind" },
    ],
  },
  {
    title: "Backend",
    description: "Reliable logic, APIs and application foundations.",
    icon: Braces,
    skills: [
      { name: "Node.js", mark: "JS", tone: "node" },
      { name: "Express.js", mark: "ex", tone: "express" },
      { name: "Java", mark: "♨", tone: "java" },
      { name: "Spring Boot", mark: "S", tone: "spring" },
    ],
  },
  {
    title: "Database & ORM",
    description: "Data models that make applications work.",
    icon: Database,
    skills: [
      { name: "MongoDB", mark: "M", tone: "mongodb" },
      { name: "PostgreSQL", mark: "P", tone: "postgresql" },
      { name: "MySQL", mark: "SQL", tone: "mysql" },
      { name: "Prisma", mark: "P", tone: "prisma" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "The toolkit behind a thoughtful workflow.",
    icon: GitBranch,
    skills: [
      { name: "Git", mark: "⑂", tone: "git" },
      { name: "GitHub", mark: "GH", tone: "github" },
      { name: "VS Code", mark: "><", tone: "vscode" },
      { name: "Postman", mark: "◉", tone: "postman" },
      { name: "Clerk", mark: "cl", tone: "clerk" },
      { name: "Stripe", mark: "S", tone: "stripe" },
      { name: "Vercel", mark: "▲", tone: "vercel" },
    ],
  },
];

function SkillMark({ skill }: { skill: Skill }) {
  return (
    <span
      className={`skill-mark skill-mark-${skill.tone}`}
      aria-hidden="true"
    >
      {skill.mark}
    </span>
  );
}

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="skills-glow skills-glow-one" aria-hidden="true" />
      <div className="skills-glow skills-glow-two" aria-hidden="true" />
      <div className="skills-inner">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
        >
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            Technical skills
          </p>
          <h2 className="section-title" id="skills-title">
            Technologies I <span className="section-gradient">Work With.</span>
          </h2>
          <p className="skills-subheading">
            Tools and technologies I use to build modern digital products.
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                className="skill-category-card"
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.55,
                  delay: prefersReducedMotion ? 0 : index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="skill-card-heading">
                  <span className="skill-category-icon" aria-hidden="true">
                    <CategoryIcon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="skill-category-number">
                    0{index + 1}
                  </span>
                </div>
                <h3>{category.title}</h3>
                <p className="skill-category-description">
                  {category.description}
                </p>
                <ul className="skill-list" aria-label={`${category.title} technologies`}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      className="skill-item"
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.25,
                        delay: prefersReducedMotion
                          ? 0
                          : index * 0.09 + skillIndex * 0.035,
                      }}
                    >
                      <SkillMark skill={skill} />
                      <span>{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
