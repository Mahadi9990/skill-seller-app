import React, { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router";
export default function AllSkills() {
  const [catagory, setcatagory] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    fetch("/Catagory.json") 
      .then((res) => res.json())
      .then((data) => setcatagory(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="">
        <div className="flex justify-center items-center gap-4 p-4 mx-auto">
          {catagory.map((item)=> <div key={item.categoryId}>
            <NavLink to={`/catagory/${item.categoryName}`} className='btn'>{item.categoryName}</NavLink>
        </div>)}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
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
