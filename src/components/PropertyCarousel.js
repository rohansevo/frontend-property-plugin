import React, { useEffect, useState } from "react";
import { getProperties } from "../services/api";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Modules
import {
  Navigation,
  Pagination,
  Autoplay
} from "swiper/modules";

function PropertyCarousel() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    async function loadProperties() {

      const data = await getProperties();

      setProperties(data);
    }

    loadProperties();

  }, []);

  return (

    <div className="mt-20 px-6">

      <h2 className="text-4xl font-bold mb-8">
        Featured Properties
      </h2>

      <Swiper

        modules={[
          Navigation,
          Pagination,
          Autoplay
        ]}

        spaceBetween={30}

        slidesPerView={3}

        navigation

        pagination={{ clickable: true }}

        autoplay={{
          delay: 3000
        }}

        breakpoints={{

          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },

        }}
      >

        {properties.map((item) => (

          <SwiperSlide key={item.id}>

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg">
                  Price: ₹{item.price}
                </p>

                <p className="mt-1">
                  Bedrooms: {item.bedrooms}
                </p>

                <p className="mt-1">
                  Location: {item.location}
                </p>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}

export default PropertyCarousel;