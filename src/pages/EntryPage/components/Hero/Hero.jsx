import React from "react";
import { motion } from 'framer-motion';
import heroimg from '../../../../assets/imgs/heroimg.jpeg'
export default function Hero({fadeInUp,fadeScale}) {
  return (
    <motion.section
      className="relative  py-40  bg-cover bg-center text-white text-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroimg})` }}
      variants={fadeInUp}
      initial="hidden"
      animate="show"
    >
      <div className="absolute inset-0 bg-white opacity-15"></div>
      <motion.div
        className="relative px-4 py-20 max-w-3xl mx-auto bg-white/0.1 backdrop-blur-md rounded-2xl shadow-lg"
        variants={fadeScale}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white-900"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          Gələcəyin Dövlət Qulluqçularını Hazırlayırıq
        </motion.h1>
        <motion.p
          className="md:text-1xl font-bold mb-6 text-white-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Dövlət qulluğu, xüsusi dövlət qulluğu və mühasibatlıq sahəsində peşəkar kurslarımızla gələcəyinizi qurun.
        </motion.p>
        <motion.a
          href="/courses"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block  hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition"
          style={{background:"#1B2070"}}
        >
          Kurslara Bax
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
