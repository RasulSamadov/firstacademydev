import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import Hero from "./components/Hero/Hero";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import CourseDetail from "./components/Testimonials/CourseDetail";
import NewsSection from "./components/NewsSection/NewsSection";
import About from "./components/About/About";
import BlogResources from "./components/BlogResources/BlogResources";
import Contact from "./components/Contact/Contact";

const EntryPage = () => {
  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navbar fadeInUp={fadeInUp} />
      <Hero fadeInUp={fadeInUp} fadeScale={fadeScale} />
      <CoursesSection fadeInUp={fadeInUp} />
      <CourseDetail fadeInUp={fadeInUp} />
      <NewsSection fadeInUp={fadeInUp} />
      <About fadeInUp={fadeInUp}/>
      {/* <BlogResources/> */}
      <Contact fadeInUp={fadeInUp} />
      <Footer fadeInUp={fadeInUp} />
    </div>
  );
};

export default EntryPage;
