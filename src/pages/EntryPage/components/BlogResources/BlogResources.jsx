import React from "react";
import { motion } from "framer-motion";

const tips = [
  "İmtahanda vaxt bölgüsü necə olmalıdır?",
  "Motivasiya necə qorunur?",
  "Yadda saxlama texnikaları"
];

export default function BlogResources() {
  return (
    <section className="px-8 py-20 bg-white/5 backdrop-blur-lg rounded-xl m-8">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-10 text-[#38bdf8] text-center"
      >
        Blog və Resurslar
      </motion.h2>
      <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
        {tips.map((tip, i) => (
          <motion.li key={i} whileHover={{ scale: 1.02 }}>
            {tip}
          </motion.li>
        ))}
        <motion.li whileHover={{ scale: 1.02 }}>
          Günün sualı: <span className="text-[#facc15]">"Dövlət qulluqçusu olmaq üçün əsas keyfiyyət nədir?"</span>
        </motion.li>
        <motion.li whileHover={{ scale: 1.02 }}>
          PDF, Word, Test faylları: <span className="text-[#facc15] underline cursor-pointer">Yüklə</span>
        </motion.li>
      </ul>
    </section>
  );
}