import React from "react";
import { motion } from 'framer-motion';
import courseimg from "../../../../assets/imgs/courseimg.jpg"
const courses = [
  {
    title: "Dövlət qulluğu üzrə hazırlıq",
    desc: "Əsas dövlət qulluğuna hazırlıq kursu.",
  },
  {
    title: "Xüsusi dövlət qulluğu üzrə hazırlıq",
    desc: "Xüsusi təyinatlı sahələr üzrə kurs.",
  },
  {
    title: "Müsahibə hazırlığı",
    desc: "Müsahibəyə hazırlaşanlar üçün intensiv proqram.",
  },
];

export default function CoursesSection({fadeInUp}) {
  return (
    <motion.section
      className="py-16 bg-white"
      variants={fadeInUp}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold  text-center mb-10" style={{color:"#1B2070"}}>
          Bütün Kurslarımız
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={courseimg}
                alt={`Kurs ${i}`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold  mb-2" style={{color:"#1B2070"}}>
                {i === 1
                  ? 'Dövlət Qulluğu Hazırlığı'
                  : i === 2
                  ? 'Xüsusi Dövlət Qulluğu'
                  : 'Mühasiblik Kursları'}
              </h3>
              <p className="text-gray-700 text-sm">
                {i === 1
                  ? 'İmtahanlara tam hazırlıq üçün nəzəri və praktik dərslər.'
                  : i === 2
                  ? 'Gömrük, prokurorluq və digər sahələr üzrə peşəkar proqram.'
                  : 'Mühasibatlıq uçotu, vergi və proqram təminatı modulları.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}