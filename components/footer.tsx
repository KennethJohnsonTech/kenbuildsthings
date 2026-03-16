"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col"
    >
      <div
        className="h-0.5 w-full"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #00C4B4 50%, transparent 100%)",
        }}
      />
      <div className="flex flex-col items-center justify-between gap-4 pb-6 pt-10 sm:flex-row">
        <span className="font-mono text-[10px] text-dim">
          KENBUILDSTHINGS &mdash; 2026
        </span>
        <nav aria-label="Social links">
          <ul className="flex gap-6" role="list">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-silver-muted transition-colors duration-200 hover:text-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.footer>
  );
}
