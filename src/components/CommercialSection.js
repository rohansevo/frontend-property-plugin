import React from "react";
import CommercialImg from "../assets/images/commercial_property.webp";
import LeaseCommercialImg from "../assets/images/lease-commercial-property.webp";

function CommercialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Commercial Spaces
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#062049] leading-tight mt-4">
            Choose from a wide variety of
            <br />
            commercial properties
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Card */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                `url(${CommercialImg})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70"></div>

            {/* Content */}
            <div className="relative z-10 p-14 flex flex-col h-full justify-center">
              <p className="uppercase text-sm font-semibold tracking-wide text-gray-500 mb-5">
                Buy for Commercial Use
              </p>

              <h3 className="text-5xl font-bold text-[#062049] leading-tight mb-6">
                Buy a Commercial
                <br />
                property
              </h3>

              <p className="text-gray-700 text-lg leading-8 mb-8 max-w-md">
                Explore from Office Spaces, Co-working spaces,
                Retail Shops, Land, Factories and more
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg w-fit transition">
                Explore Buying Commercial
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[500px] bg-cover bg-center"
            style={{
              backgroundImage:
                `url(${LeaseCommercialImg})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#f6eee6]/80"></div>

            {/* Content */}
            <div className="relative z-10 p-14 flex flex-col h-full justify-center">
              <p className="uppercase text-sm font-semibold tracking-wide text-gray-500 mb-5">
                Lease for Commercial Use
              </p>

              <h3 className="text-5xl font-bold text-[#062049] leading-tight mb-6">
                Lease a Commercial
                <br />
                property
              </h3>

              <p className="text-gray-700 text-lg leading-8 mb-8 max-w-md">
                Explore from Office Spaces, Co-working spaces,
                Retail Shops, Land, Factories and more
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg w-fit transition">
                Explore Leasing Commercial
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CommercialSection;