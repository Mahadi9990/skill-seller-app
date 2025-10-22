import React from "react";
import { useParams } from "react-router";

export default function SingleSkills() {
  const { id } = useParams();

  return (
    <div>SingleSkills {id}</div>
  );
}