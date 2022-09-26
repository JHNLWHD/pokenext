import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-8 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-8 border-solid border-purple-500 border-t-transparent"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
