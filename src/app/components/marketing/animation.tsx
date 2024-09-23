"use client";

function Animation() {
  // Define your items to display
  const items = [
      "Learn about the Roman Empire " ,
      "Write  inviting my neighbors to a barbecue " ,
      "Give me ideas for what to do with my kids’ art " ,
      "Help me study vocabulary for a college entrance exam " ,
      "Help me pick an outfit that will look good on camera " ,
      "Write an email to request a quote from local plumbers " ,
      "Create a charter to start a film club " ,
      "Write a Python script to automate daily email reports " ,
    
  ];

  // Duplicate items for infinite scrolling effect
  const extendedItems = [...items, ...items];

  return (
    <section className="overflow-hidden relative group">
      {/* First row: Right to left */}
      <div className="flex animate-scroll-left whitespace-nowrap mt-4 group-hover:paused">
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7] p-4 rounded-md hover:bg-[#d6d3d1] cursor-pointer mx-2"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Second row: Left to right */}
      <div className="flex animate-scroll-right whitespace-nowrap mt-4 group-hover:paused" aria-hidden="true">
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7] p-4 rounded-md hover:bg-[#d6d3d1] cursor-pointer mx-2"
          >
            {item}
          </div>
          
        ))}
      </div>

      {/* Third row: Right to left */}
      <div className="flex animate-scroll-left whitespace-nowrap mt-4 mb-8 group-hover:paused">
        {extendedItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7] p-4 rounded-md hover:bg-[#d6d3d1] cursor-pointer mx-2"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Tailwind Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: slide 30s linear infinite;
          display: flex;
        }

        /* Responsive styles */
        @media (max-width: 640px) { /* Mobile */
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite; /* Faster for mobile */
          }
          .animate-scroll-right {
            animation: scroll-right 20s linear infinite; /* Faster for mobile */
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) { /* Tablet */
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite; /* Moderate speed for tablet */
          }
          .animate-scroll-right {
            animation: scroll-right 25s linear infinite; /* Moderate speed for tablet */
          }
        }
        @media (min-width: 1025px) { /* Desktop */
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite; /* Standard speed for desktop */
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite; /* Standard speed for desktop */
          }
        }
      `}</style>
    </section>
  );
}

export default Animation;
