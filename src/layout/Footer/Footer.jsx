import React from "react";

import { motion } from 'framer-motion';
export default function Footer({fadeInUp}) {
  return (
    <motion.footer
      className="bg-blue-50 p-4 text-center text-sm text-blue-800"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      © {new Date().getFullYear()} Dövlət Tədris Mərkəzi. Bütün hüquqlar qorunur.
    </motion.footer>
  );
}
