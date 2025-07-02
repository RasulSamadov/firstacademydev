import React from "react";
import { motion } from 'framer-motion';
const posts = [
  { title: "Yeni Qanun Dəyişiklikləri", date: "Mart 2025" },
  { title: "İmtahan üçün 5 əsas tövsiyə", date: "Fevral 2025" },
];

export default function NewsSection({fadeInUp}) {
  return (
    <motion.section
    className="py-16 bg-white"
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold  text-center mb-10" style={{color:"#1B2070"}}>Son Xəbərlər</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.article
              key={i}
              className="bg-blue-50 p-5 rounded-xl shadow"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold  mb-2" style={{color:"#1B2070"}}>
                {i === 1
                  ? 'Yeni Dövlət Qulluğu Qaydaları Açıqlanıb'
                  : i === 2
                  ? 'Mühasibat Kurslarında Yeni Modul'
                  : 'Təlimçilərimizlə Yeni Müsahibə'}
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                {i === 1
                  ? 'Nazirlik tərəfindən elan olunan yeni qaydalar tələbələrin diqqətində olmalıdır.'
                  : i === 2
                  ? 'Yeni əlavə olunan vergi modulu artıq bütün tələbələr üçün aktivdir.'
                  : 'Baş müəllimimizlə keçirilən müsahibəni oxuyun və motivasiya qazanın.'}
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">Ətraflı oxu</a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}