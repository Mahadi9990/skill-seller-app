import React from "react";
import { useParams, useLoaderData } from "react-router";

export default function SkillsDetails() {
  const { id } = useParams();
  const data = useLoaderData();

  const skill = data.find((item) => item.skillId == id);

  if (!skill) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Skill not found 
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 md:flex gap-8 bg-white rounded-2xl shadow-lg mt-10">
      <div className="md:w-1/2">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-80 object-cover rounded-xl shadow-md"
        />
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 space-y-3">
        <h1 className="text-3xl font-bold text-gray-800">{skill.skillName}</h1>
        <p className="text-gray-500">{skill.category}</p>
        <p className="text-gray-700 leading-relaxed">{skill.description}</p>

        <div className="flex justify-between items-center mt-4 text-gray-700">
          <span className="font-medium"> Rating: {skill.rating}</span>
          <span className="font-medium"> Price: ${skill.price}</span>
        </div>

        <p className="text-sm text-gray-500">
          Slots Available: {skill.slotsAvailable}
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Instructor Info</h3>
          <p className="text-gray-700">👤 {skill.providerName}</p>
          <p className="text-gray-600 text-sm">📧 {skill.providerEmail}</p>
        </div>

        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
