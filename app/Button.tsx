'use client'

// components/SpaceButton.tsx
import React from "react";

const SpaceButton: React.FC = () => {
    const handleClick = () => {
        window.open("https://www.linkedin.com/in/muhammad-kashan-ashraf/", "_blank");
    };

  return (
    <button
      onClick={handleClick}
      className="px-8 py-4 text-xl font-semibold text-white border-2 border-purple-400 rounded-lg transition duration-300 ease-in-out
      bg-transparent hover:bg-purple-600/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_30px_rgba(187,134,252,0.8),0_0_60px_rgba(187,134,252,1)]
      shadow-[0_0_10px_rgba(255,255,255,0.5),0_0_20px_rgba(187,134,252,0.7),0_0_40px_rgba(187,134,252,1)] uppercase tracking-wider"
    >
      Explore Space 👀
    </button>
  );
};

export default SpaceButton;
