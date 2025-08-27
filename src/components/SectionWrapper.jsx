"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}          // hidden & moved down
      whileInView={{ opacity: 1, y: 0 }}      // fade up into place
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}  // only animate once
    >
      {children}
    </motion.section>
  );
}
