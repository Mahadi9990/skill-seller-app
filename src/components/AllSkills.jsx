import React from "react";
import { Link, useLoaderData } from "react-router";
export default function AllSkills() {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <Link  key={item.skillId} to={`/skills/${item.skillId}`}>
            <div className="">
              <p>{item.skillName}</p>
              <div className="imgae">
                <img src={item.image} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
