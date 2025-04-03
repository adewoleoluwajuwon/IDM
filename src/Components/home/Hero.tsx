'use client';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slides } from '../../Constants/slides';
import NavModal from '../common/NavModal';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!dragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [dragging]);

  const handleDragEnd = (_event: any, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else if (info.offset.x < -50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    setDragging(false);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, x: "-100%" }} 
      animate={{ opacity: 1, x: "0%" }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      className="relative flex items-center justify-center w-screen min-h-screen md:h-screen overflow-hidden pb-20"
    >
      {/* 🔹 Prevents Scrollbar Flash & Allows Smooth Scrolling */}
      <style>
        {`
          html, body {
            overflow-y: auto; /* Ensures you can scroll anywhere */
          }
        `}
      </style>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-white transition-all duration-700" />
      <NavModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={handleDragEnd}
        className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center justify-between px-8 pt-24 md:pt-32"
      >
        {/* Left: Text Content */}
        <div className="w-full max-w-lg flex flex-col space-y-4 text-center md:text-left">
          {/* Title Section: Image + Title */}
          <div className="flex justify-center md:justify-start items-center">
            <img
              src={`${slides[currentSlide].roundImages[0]}?v=${new Date().getTime()}`}
              alt="Round Icon"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-md mr-4"
            />
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-black leading-tight"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />
          </div>

          {/* Subtitle */}
          <motion.p
            key={`${currentSlide}-subtitle`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="text-sm md:text-lg text-gray-700 mt-2 md:mt-4"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }} 
            className="mt-4 md:mt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto mb-16"
          >
            <button 
              className="rounded-lg border border-red-600 bg-white px-6 py-2 text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white w-full md:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Request A Demo
            </button>
            <button 
              className="rounded-lg bg-red-600 px-6 py-2 text-white transition-all duration-300 hover:bg-red-700 w-full md:w-auto"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Right: Image Content */}
        <motion.div
          key={`${currentSlide}-image`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="hidden md:flex w-full max-w-xl justify-end"
        >
          <img 
            src={`${slides[currentSlide].image}?v=${new Date().getTime()}`}
            alt="Slide Image" 
            loading="lazy"
            className="w-auto max-w-full max-h-[78vh] object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 mt-8 md:mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-blue-500 w-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Hero;
