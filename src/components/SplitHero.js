import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-100 py-14 px-5 mt-5 pt-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-wide text-gray-500 mb-3">
            ALL PROPERTY NEEDS - ONE PORTAL
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2341] leading-tight">
            Find Better Places to Live, Work
            <br />
            and Wonder...
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Image */}
          <div className="flex-1 w-full">
            <img
              src="../images/prop_img.webp"
              alt="Modern Living Room"
              className="w-full rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <p className="text-sm font-bold text-gray-500 mb-4">
              BUY A HOME
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b2341] leading-snug mb-6">
              Find, Buy & Own Your
              <br />
              Dream Home
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Explore from Apartments, land, builder floors,
              villas and more
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition duration-300">
              Explore Buying
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;