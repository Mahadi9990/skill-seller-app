import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center mx-auto p-20">
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
}
