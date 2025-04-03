// Import all images from the correct path
import slide1 from "/images/slide1.webp";
import slide2 from "/images/slide2.webp";
import slide3 from "/images/slide3.webp";
import slide4 from "/images/slide4.webp";
import slide5 from "/images/slide5.webp";
import asset1 from "/images/asset 1.svg";  // ✅ Example for round image

// Define the type for a slide
export interface Slide {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  roundImages: string[];
}

// Export the slides array
export const slides: Slide[] = [
  {
    title: "Perfecting business <span class='text-red-600'>process.</span>",
    subtitle: "Streamline Operations, Enhance Efficiency, drive and growth",
    image: slide1, // ✅ Use imported image
    gradient: "from-red-100 to-white",
    roundImages: [asset1],
  },
  {
    title: "Pioneering IT-Enabled Services in <span class='text-red-600'>Africa.</span>",
    subtitle: "Shaping Africa’s future with reliable, transformative IT solutions.",
    image: slide2,
    gradient: "from-red-100 to-white",
    roundImages: [asset1],
  },
  {
    title: "Preparing young minds for global <span class='text-red-600'>ICT.</span>",
    subtitle: "Equipping the next generation with the tools to shape the global ICT landscape",
    image: slide3,
    gradient: "from-red-100 to-white",
    roundImages: [asset1],
  },
  {
    title: "IDM@School, The future of <span class='text-red-600'>learning.</span>",
    subtitle: "Leading the next frontier of innovation and technology",
    image: slide4,
    gradient: "from-red-100 to-white",
    roundImages: [asset1],
  },
  {
    title: "Empowering Education Through Seamless <span class='text-red-600'>Management.</span>",
    subtitle: "Streamlining education processes to enhance learning outcomes and student success",
    image: slide5,
    gradient: "from-red-100 to-white",
    roundImages: [asset1],
  },
];
