"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Rocket, X } from "lucide-react";

type ComingSoonModalProps = {
  onClose: () => void;
};

export default function ComingSoonModal({ onClose }: ComingSoonModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const closeDialog = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open) return;

    dialog.close();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="coming-soon-dialog"
      aria-labelledby="coming-soon-title"
      aria-describedby="coming-soon-description"
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          closeDialog();
        }
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeDialog();
      }}
    >
      <motion.div
        className="coming-soon-panel"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          className="coming-soon-close"
          type="button"
          onClick={closeDialog}
          aria-label="Close coming soon dialog"
          autoFocus
        >
          <X size={17} aria-hidden="true" />
        </button>
        <span className="coming-soon-icon" aria-hidden="true">
          <Rocket size={22} strokeWidth={1.7} />
        </span>
        <h2 id="coming-soon-title">Coming Soon!</h2>
        <p id="coming-soon-description">
          This project is currently being prepared. Stay tuned for updates!
        </p>
        <button
          className="coming-soon-confirm"
          type="button"
          onClick={closeDialog}
        >
          Got it
        </button>
      </motion.div>
    </dialog>
  );
}
