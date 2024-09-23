"use client";

const testimonials = [
  { name: "Alice", message: "This service is fantastic!", image: "/images/alice.jpg" },
  { name: "Bob", message: "I love the user experience.", image: "/images/bob.jpg" }, 
  { name: "Charlie", message: "Highly recommended!", image: "/images/charlie.jpg" },
  { name: "Dave", message: "A game changer for our team!", image: "/images/dave.jpg" },
  // { name: "Eva", message: "Incredible quality and support!", image: "/images/eva.jpg" },
  // { name: "Frank", message: "Great functionality and ease of use!", image: "/images/frank.jpg" },
  // { name: "Grace", message: "The best customer service!", image: "/images/grace.jpg" },
  // { name: "Hank", message: "I am amazed by the results!", image: "/images/hank.jpg" },
];

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Testimonials</h1>

      {/* Responsive grid for testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hidden md:block" // Hide on mobile
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 italic text-center">{testimonial.message}</p>
            <p className="mt-2 text-right font-semibold text-gray-800">- {testimonial.name}</p>
          </div>
        ))}
        {/* Mobile display */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 md:hidden"> {/* Show only on mobile */}
          <img
            src={testimonials[0].image} // Show the first testimonial on mobile
            alt={testimonials[0].name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 italic text-center">{testimonials[0].message}</p>
          <p className="mt-2 text-right font-semibold text-gray-800">- {testimonials[0].name}</p>
        </div>

        {/* Tablet display: Show the first two testimonials */}
        <div className="hidden sm:grid sm:grid-cols-4 md:hidden">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <p className="text-gray-700 italic text-center">{testimonial.message}</p>
              <p className="mt-2 text-right font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;







// SLIDING ANIMATION

// "use client";

// const testimonials = [
//   { name: "Alice", message: "This service is fantastic!", image: "/images/alice.jpg" },
//   { name: "Bob", message: "I love the user experience.", image: "/images/bob.jpg" },
//   { name: "Charlie", message: "Highly recommended!", image: "/images/charlie.jpg" },
//   { name: "Dave", message: "A game changer for our team!", image: "/images/dave.jpg" },
//   { name: "Eva", message: "Incredible quality and support!", image: "/images/eva.jpg" },
//   { name: "Frank", message: "Great functionality and ease of use!", image: "/images/frank.jpg" },
//   { name: "Grace", message: "The best customer service!", image: "/images/grace.jpg" },
//   { name: "Hank", message: "I am amazed by the results!", image: "/images/hank.jpg" },
// ];

// const Home = () => {
//   // Duplicating testimonials for smooth infinite scroll effect
//   const extendedTestimonials = [...testimonials, ...testimonials];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Testimonials</h1>

//       {/* Sliding container */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex animate-slide infinite whitespace-nowrap"
//           style={{ width: `${(extendedTestimonials.length / 4) * 100}%` }} // Adjust width for four visible items on desktop
//         >
//           {extendedTestimonials.map((testimonial, index) => (
//             <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
//               <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md mx-auto">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4"
//                 />
//                 <p className="text-gray-700 italic text-center">{testimonial.message}</p>
//                 <p className="mt-2 text-right font-semibold text-gray-800">- {testimonial.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tailwind Styles */}
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-slide {
//           animation: slide 75s linear infinite; /* Default speed */ 
//         }

//         /* Responsive animation speeds */
//         @media (max-width: 640px) {
//           .animate-slide {
//             animation: slide 40s linear infinite; /* Faster for mobile */
//           }
//         }
//         @media (min-width: 641px) and (max-width: 1024px) {
//           .animate-slide {
//             animation: slide 50s linear infinite; /* Moderate for tablet */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;
