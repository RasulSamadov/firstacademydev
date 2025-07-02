import React from "react";
import { motion } from "framer-motion";

export default function Contact({fadeInUp}) {
  return (
    <motion.section
    className="py-16 bg-white"
    variants={fadeInUp}
    initial="hidden"
    animate="show"
  >
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold  mb-6" style={{color:"#1B2070"}}>Bizimlə Əlaqə</h2>
      <p className="text-gray-700 mb-8">
        Hər hansı sualınız, təklifiniz və ya qeydiyyat üçün bizimlə əlaqə saxlayın.
      </p>
      <form className="space-y-4 text-left">
        <input
          type="text"
          placeholder="Ad Soyad"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Mesajınız"
          rows="5"
          className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          Göndər
        </button>
      </form>
      <div className="mt-10 text-sm text-gray-600">
        <p>Telefon: <a href="tel:+994123456789" className="text-blue-600">+994 12 345 67 89</a></p>
        <p>Email: <a href="mailto:info@tdm.az" className="text-blue-600">info@tdm.az</a></p>
        <p>Instagram: <a href="https://instagram.com/tdm.az" className="text-blue-600">@tdm.az</a></p>
      </div>
    </div>
  </motion.section>
  );
}
