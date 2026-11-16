"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectDetailsProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectDetails({
  project,
  onClose,
}: ProjectDetailsProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open) return;

    dialog.close();
    onClose();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="project-details-dialog"
      aria-labelledby="project-details-title"
      aria-describedby="project-details-overview"
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          closeDialog();
        }
      }}
    >
      <div className="project-details-panel">
        <div className="project-details-top">
          <span className="project-details-kicker">
            PROJECT {project.number} <span>·</span> {project.category}
          </span>
          <button
            className="project-details-close"
            type="button"
            onClick={closeDialog}
            aria-label="Close project details"
            autoFocus
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <h2 id="project-details-title">{project.name}</h2>
        <p className="project-details-overview" id="project-details-overview">
          {project.overview}
        </p>

        <div className="project-details-columns">
          <section aria-labelledby="project-problem-title">
            <h3 id="project-problem-title">Problem addressed</h3>
            <p>{project.problem}</p>
          </section>
          <section aria-labelledby="project-solution-title">
            <h3 id="project-solution-title">Solution implemented</h3>
            <p>{project.solution}</p>
          </section>
        </div>

        <section className="project-details-features" aria-labelledby="project-features-title">
          <h3 id="project-features-title">Key features</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                <span aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="project-details-technologies" aria-labelledby="project-technologies-title">
          <h3 id="project-technologies-title">Technologies</h3>
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>

        <div className="project-details-footer">
          <span>More project links will be available here.</span>
          <span className="project-details-link-status">
            <ArrowUpRight size={14} aria-hidden="true" />
            Links not configured
          </span>
        </div>
      </div>
    </dialog>
  );
}
