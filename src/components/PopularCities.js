import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const cities = [
  {
    name: "Delhi / NCR",
    properties: "255,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800",
  },
  {
    name: "Bangalore",
    properties: "82,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800",
  },
  {
    name: "Pune",
    properties: "67,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=800",
  },
  {
    name: "Mumbai",
    properties: "78,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800",
  },
  {
    name: "Hyderabad",
    properties: "42,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800",
  },
  {
    name: "Kolkata",
    properties: "47,000+ Properties",
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800",
  },
];

function TopCities() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <p className="text-sm font-semibold uppercase text-gray-400 mb-3">
          Top Cities
        </p>

        <h2 className="text-4xl font-bold text-[#0B1C39] mb-10">
          Explore Real Estate in Popular Indian Cities
        </h2>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300">
                
                <div className="flex items-center gap-4">
                  
                  {/* Image */}
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B1C39]">
                      {city.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {city.properties}
                    </p>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default TopCities;