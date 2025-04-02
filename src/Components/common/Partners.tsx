'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { partners } from '../../Constants/partners';

const Partners: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  // ✅ Auto-scroll every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setXPosition((prev) => {
          const newX = prev - 200;
          return newX < -1000 ? 0 : newX; //infinite scrolling
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isDragging]);

  useEffect(() => {
    controls.start({ x: xPosition, transition: { duration: 1, ease: 'linear' } });
  }, [xPosition, controls]);

  return (
    <section className="w-full py-12 bg-white">
      {/* ✅ Title */}
      <h2 className="text-center text-3xl font-bold text-black mb-6">
        Our Esteemed & Valued Partners
      </h2>

      {/* ✅ Carousel Wrapper */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab"
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={controls}
        >
          {partners.concat(partners).map((logo, index) => ( // ✅ Infinite Loop Effect
            <motion.div
              key={index}
              className="min-w-[150px] md:min-w-[180px] lg:min-w-[200px] bg-white p-4 rounded-lg shadow-md"
            >
              <img src={logo} alt={`Partner ${index + 1}`} className="w-full h-auto object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
