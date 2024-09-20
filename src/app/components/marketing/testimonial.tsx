// pages/index.tsx
"use client";
import Button from "@/app/components/ui/button";


import { useState } from 'react';

const testimonials = [
  { name: "Alice", message: "This service is fantastic!" },
  { name: "Bob", message: "I love the user experience." },
  { name: "Charlie", message: "Highly recommended!" },
  { name: "Dave", message: "A game changer for our team!" },
  { name: "Eva", message: "Incredible quality and support!" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
      <div className="flex justify-center items-center">
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md w-80">
          <p className="text-gray-700 italic">{testimonials[currentIndex].message}</p>
          <p className="mt-2 text-right font-semibold text-gray-800">- {testimonials[currentIndex].name}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Button onClick={handlePrev} 
          className="bg-[#f5f5f4] text-gray-800 py-2 px-4 rounded hover:bg-[#d6d3d1] transition duration-200"
        >
           &lt;
        </Button>
        <Button onClick={handleNext} 
            className="bg-[#f5f5f4] text-gray-800 py-2 px-4 rounded hover:bg-[#d6d3d1] transition duration-200">
           &gt;
        </Button>
      </div>
    </div>
  );
};

export default Home;
