"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDetails from "@/components/ui/ProjectDetails";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [dialogTrigger, setDialogTrigger] = useState<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const openProjectDetails = (project: Project, trigger: HTMLElement) => {
    setDialogTrigger(trigger);
    setComingSoonOpen(false);
    setSelectedProject(project);
  };

  const openComingSoon = (_project: Project, trigger: HTMLElement) => {
    setDialogTrigger(trigger);
    setSelectedProject(null);
    setComingSoonOpen(true);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
    setComingSoonOpen(false);
    requestAnimationFrame(() => dialogTrigger?.focus());
  };

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects-ambient projects-ambient-one" aria-hidden="true" />
      <div className="projects-ambient projects-ambient-two" aria-hidden="true" />
      <div className="projects-inner">
        <motion.header
          className="projects-heading"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.55 }}
        >
          <p className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden="true" />
            Selected work
          </p>
          <h2 className="section-title projects-title" id="projects-title">
            Things I&apos;ve Built.
            <br />
            <span className="section-gradient">Ideas Turned Into Reality.</span>
          </h2>
          <p className="projects-description">
            A collection of applications and digital experiences I&apos;ve
            designed and developed using modern technologies.
          </p>
        </motion.header>

        <div className="projects-grid">
          <ProjectCard
            project={projects[0]}
            featured
            index={0}
            onViewDetails={openProjectDetails}
            onComingSoon={openComingSoon}
          />
          {projects.slice(1).map((project, index) => (
            <ProjectCard
              project={project}
              index={index + 1}
              key={project.id}
              onViewDetails={openProjectDetails}
              onComingSoon={openComingSoon}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetails project={selectedProject} onClose={closeProjectDialog} />
      )}
      {comingSoonOpen && (
        <ComingSoonModal onClose={closeProjectDialog} />
      )}
    </section>
  );
}
