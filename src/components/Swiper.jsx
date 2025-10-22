import React from "react";
import { useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function SkillsSwiper() {
  const allSkills = useLoaderData();

  return (
    <Swiper
      className="h-screen"
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3} // change as needed
    >
      {allSkills.map((item) => (
        <SwiperSlide key={item.skillId} >
          <div className="p-4 border rounded shadow text-center">
            <img
              src={item.image}
              alt={item.skillName}
              className="w-full h-screen object-cover"
            />
            <p className="font-semibold">{item.skillName}</p>
            <p className="text-sm text-gray-600">${item.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
