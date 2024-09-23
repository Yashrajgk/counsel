"use client";

function Animation() {
  // Define your items to display
  const items = [
    { text: "Learn about the Roman Empire " },
    { text: "Write a text inviting my neighbors to a barbecue " },
    { text: "Give me ideas for what to do with my kids’ art " },
    { text: "Help me study vocabulary for a college entrance exam " },
    { text: "Help me pick an outfit that will look good on camera " },
    { text: "Write an email to request a quote from local plumbers " },
    { text: "Create a charter to start a film club " },
    { text: "Write a Python script to automate daily email reports " },
  ];

  // Duplicate items for infinite scrolling effect
  const extendedItems = [...items, ...items];

  return (
    <section className="overflow-hidden relative">
      {/* First row: Right to left */}
      <div className="flex animate-scroll-left whitespace-nowrap mt-4">
        {extendedItems.map((item, index) => (
          <div key={index} className="bg-[#f7f7f7] p-4 rounded-md hover:bg-[#d6d3d1] cursor-pointer mx-2">
            {item.text}
          </div>
        ))}
      </div>

      {/* Second row: Left to right with infinite scrolling */}
      <div className="flex animate-scroll-right whitespace-nowrap mt-4">
        {extendedItems.map((item, index) => (
          <div key={index} className="bg-[#f7f7f7] p-4 rounded-md hover:bg-[#d6d3d1] cursor-pointer mx-2">
            {item.text}
          </div>
        ))}
      </div>

      {/* Third row: Right to left */}
      <div className="flex animate-scroll-left whitespace-nowrap mt-4 mb-8">
        {extendedItems.map((item, index) => (
          <div key={index} className="bg-[#f7f7f7] p-4 rounded-md hover:bg-[#d6d3d1] cursor-pointer mx-2">
            {item.text}
          </div>
        ))}
      </div>

      {/* Tailwind Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
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
