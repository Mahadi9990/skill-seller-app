import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import CatagoryMenu from "./CatagoryMenu";
export default function AllSkillsOutlet() {
  const [catagory, setcatagory] = useState([]);
  useEffect(() => {
    fetch("/Catagory.json") 
      .then((res) => res.json())
      .then((data) => setcatagory(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="">
      <CatagoryMenu catagory={catagory}/>
      </div>
      <Outlet/>
    </div>
  );
}
