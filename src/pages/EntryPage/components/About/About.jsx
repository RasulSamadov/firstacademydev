import React from "react";
import { motion } from "framer-motion";

export default function About({fadeInUp}) {
  return (
    <div className="max-w-6xl mx-auto px-4 m-10">
    <motion.section
      className="py-16 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-2xl shadow-xl"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1 text-left">
          <h2 className="text-3xl font-bold  mb-4" style={{color:"#1B2070"}}>Haqqımızda</h2>
          <p className="text-gray-700">
            Dövlət Tədris Mərkəzi dövlət qulluğu, xüsusi dövlət orqanları və mühasibatlıq sahəsində keyfiyyətli tədris xidmətləri təqdim edir. Tələbələrimizi gələcəyin peşəkar mütəxəssisləri kimi formalaşdırırıq.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-6 md:grid-cols-3">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold  mb-2" style={{color:"#1B2070"}} >Missiyamız</h3>
            <p className="text-gray-700 text-sm">Tələbələrə yüksək keyfiyyətli və praktiki yönümlü təlimlər təqdim etmək.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold  mb-2" style={{color:"#1B2070"}} >Dəyərlərimiz</h3>
            <p className="text-gray-700 text-sm">Etibar, şəffaflıq və peşəkarlıq üzərində qurulan bir təhsil mühiti yaratmaq.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold  mb-2" style={{color:"#1B2070"}} >Komandamız</h3>
            <p className="text-gray-700 text-sm">Sahəsində ixtisaslaşmış müəllimlər və dəstək heyətimizlə xidmətinizdəyik.</p>
          </div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}