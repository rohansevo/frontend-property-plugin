import React, { useEffect, useState } from "react";

import { getNewLaunchProjects } from "../services/api";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function NewLaunchProjects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    async function loadProjects() {

      const data = await getNewLaunchProjects();

      setProjects(data);
    }

    loadProjects();

  }, []);

  return (

    <div id="new-launch-projects" className="mt-20 px-6">

      <h2 className="text-4xl font-bold mb-10">
        Newly Launched Projects
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

        {projects.map((project) => (

          <SwiperSlide key={project.id}>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}

export default NewLaunchProjects;