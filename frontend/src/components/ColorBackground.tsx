import React from "react";

const ColorBackground = () => {
  return (
    <>
      <div className="absolute top-5 left-0 h-24 w-56 bg-green-400 blur-3xl opacity-20" />
      <div className="absolute top-5 left-[220px] h-24 w-56 bg-blue-400 blur-3xl opacity-10" />
      <div className="absolute top-5 right-[220px] h-24 w-56 bg-pink-400 blur-3xl opacity-10" />
      <div className="absolute top-5 right-0 h-24 w-56 bg-yellow-400 blur-3xl opacity-10" />
    </>
  );
};

export default ColorBackground;
