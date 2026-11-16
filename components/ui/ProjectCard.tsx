"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, GitBranch } from "lucide-react";
import { useState, type ComponentType } from "react";
import { contact } from "@/lib/contact";
import type { Project, ProjectId } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  index: number;
  onViewDetails: (project: Project, trigger: HTMLElement) => void;
  onComingSoon: (project: Project, trigger: HTMLElement) => void;
};

function BakeryPreview() {
  return (
    <div className="project-preview-window bakery-preview">
      <div className="preview-topbar">
        <span className="preview-brand-dot" />
        <span className="preview-topbar-title">BAKERY ADMIN</span>
        <span className="preview-topbar-menu">•••</span>
      </div>
      <div className="bakery-preview-body">
        <div className="preview-sidebar" aria-hidden="true">
          <span className="preview-sidebar-logo">B.</span>
          <span className="is-current" />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="bakery-dashboard">
          <div className="bakery-dashboard-heading">
            <div>
              <span className="preview-overline">YOUR WORKSPACE</span>
              <strong>Bakery overview</strong>
            </div>
            <span className="preview-avatar">{contact.monogram}</span>
          </div>
          <div className="bakery-stat-row">
            <div><span>ORDERS</span><strong>Order management</strong></div>
            <div><span>CATALOGUE</span><strong>Bakery products</strong></div>
            <div><span>BOOKINGS</span><strong>Table &amp; events</strong></div>
          </div>
          <div className="bakery-lower-row">
            <div className="bakery-order-panel">
              <span className="preview-overline">RECENT ACTIVITY</span>
              <span className="preview-order-line"><i /> Customer orders <b /></span>
              <span className="preview-order-line"><i /> Custom cake requests <b /></span>
              <span className="preview-order-line"><i /> Table bookings <b /></span>
            </div>
            <div className="bakery-special-panel">
              <span className="preview-overline">FEATURED</span>
              <span className="bakery-special-art"><i /></span>
              <span className="preview-special-label">Today&apos;s Special</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="project-preview-window chat-preview">
      <div className="preview-topbar">
        <span className="chat-preview-mark">✳</span>
        <span className="preview-topbar-title">SALES ASSISTANT</span>
        <span className="chat-online"><i /> Live</span>
      </div>
      <div className="chat-preview-body">
        <div className="chat-preview-intro">
          <span className="chat-orb">✳</span>
          <strong>How can I help?</strong>
          <span>Ask a question to get started.</span>
        </div>
        <div className="chat-bubble chat-bubble-user">I&apos;d like to book a meeting.</div>
        <div className="chat-bubble chat-bubble-agent">
          <span className="chat-agent-icon">✳</span>
          Let&apos;s find a time that works for you.
        </div>
        <div className="chat-preview-input">Write a message… <span>↗</span></div>
      </div>
    </div>
  );
}

function StorePreview() {
  return (
    <div className="project-preview-window store-preview">
      <div className="preview-topbar">
        <span className="store-preview-mark">A</span>
        <span className="preview-topbar-title">ACCESSORIES</span>
        <span className="store-preview-nav">CATALOGUE&nbsp;&nbsp; ABOUT</span>
      </div>
      <div className="store-preview-body">
        <span className="preview-overline">EXPLORE THE CATALOGUE</span>
        <strong>Find your next<br />favourite upgrade.</strong>
        <div className="store-product-row">
          <span className="store-product-shape store-product-one"><i /></span>
          <span className="store-product-shape store-product-two"><i /></span>
          <span className="store-product-shape store-product-three"><i /></span>
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="project-preview-window portfolio-preview">
      <div className="preview-topbar">
        <span className="portfolio-preview-mark">{contact.name.toUpperCase()}</span>
        <span className="portfolio-preview-nav">ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span>
      </div>
      <div className="portfolio-preview-body">
        <span className="preview-overline">PERSONAL PORTFOLIO</span>
        <strong>Designing &amp; building<br />for the web.</strong>
        <span className="portfolio-preview-link">EXPLORE WORK <i>↗</i></span>
        <div className="portfolio-preview-blocks"><i /><i /><i /></div>
      </div>
    </div>
  );
}

const previewComponents: Record<ProjectId, ComponentType> = {
  "bakery-saas": BakeryPreview,
  "ai-sales": ChatPreview,
  "car-accessories": StorePreview,
  portfolio: PortfolioPreview,
};

export default function ProjectCard({
  project,
  featured = false,
  index,
  onViewDetails,
  onComingSoon,
}: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const Preview = previewComponents[project.id];

  return (
    <motion.article
      className={`project-card${featured ? " project-card-featured" : ""}`}
      tabIndex={0}
      aria-label={`Open ${project.name} project details`}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a, button")) {
          return;
        }
        onViewDetails(project, event.currentTarget);
      }}
      onKeyDown={(event) => {
        if (
          event.target === event.currentTarget &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          onViewDetails(project, event.currentTarget);
        }
      }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={`project-visual${featured ? " project-visual-featured" : ""}`}>
        {project.imageAvailable && !imageFailed ? (
          <Image
            className="project-image"
            src={project.imageSrc}
            alt={`Preview of ${project.name}`}
            fill
            sizes={featured ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 40vw"}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className={`project-preview-fallback project-preview-${project.id}`}>
            <span className="project-preview-label">UI CONCEPT · NOT A SCREENSHOT</span>
            <Preview />
          </div>
        )}
        <span className="project-number">{project.number}</span>
      </div>

      <div className="project-card-content">
        <div className="project-category-row">
          <span className="project-category">{project.category}</span>
          {featured && <span className="featured-label">FEATURED</span>}
        </div>
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-description">{project.description}</p>
        <ul className="project-tech-list" aria-label={`${project.name} technologies`}>
          {project.technologies.slice(0, featured ? 5 : 4).map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
          {project.technologies.length > (featured ? 5 : 4) && (
            <li className="project-tech-more">
              +{project.technologies.length - (featured ? 5 : 4)}
            </li>
          )}
        </ul>
        <div className="project-card-actions">
          <button
            className="project-details-button"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onViewDetails(project, event.currentTarget);
            }}
          >
            View details <ArrowDownRight size={15} aria-hidden="true" />
          </button>
          <div className="project-external-actions" aria-label="Project links">
            <button
              className="project-icon-action"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onComingSoon(project, event.currentTarget);
              }}
              aria-label={`${project.name} live demo coming soon`}
              title="Coming soon"
            >
              <ArrowUpRight size={15} aria-hidden="true" />
            </button>
            <button
              className="project-icon-action"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onComingSoon(project, event.currentTarget);
              }}
              aria-label={`${project.name} source code coming soon`}
              title="Coming soon"
            >
              <GitBranch size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
