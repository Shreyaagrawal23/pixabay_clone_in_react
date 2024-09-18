import React, { useContext } from "react";
import Context from "./Context";
import InputBar from "./InputBar";

const Nav = () => {
  const { fetchDataFromCategory } = useContext(Context);
  return (
    <>
      <div className=" p-6 flex justify-center gap-[3%] items-center ">
        <button
          onClick={() => fetchDataFromCategory("nature")}
          className="bg-black px-6 py-2 rounded-md text-blue-500 font-bold border-4 border-blue-500"
        >
          Nature
        </button>
        <button
          onClick={() => fetchDataFromCategory("health")}
          className="bg-black px-6 py-2 rounded-md text-red-500 font-bold border-4 border-red-500"
        >
          Health
        </button>
        <button
          onClick={() => fetchDataFromCategory("music")}
          className="bg-black px-6 py-2 rounded-md text-green-400 font-bold border-4 border-green-400"
        >
          Music
        </button>
        <button
          onClick={() => fetchDataFromCategory("people")}
          className="bg-black px-6 py-2 rounded-md text-pink-500 font-bold border-4 border-pink-500"
        >
          People
        </button>
        <button
          onClick={() => fetchDataFromCategory("sports")}
          className="bg-black px-6 py-2 rounded-md text-purple-500 font-bold border-4 border-purple-500"
        >
          Sports
        </button>
        <button
          onClick={() => fetchDataFromCategory("animals")}
          className="bg-black px-6 py-2 rounded-md text-yellow-500 font-bold border-4 border-yellow-500"
        >
          Animals
        </button>
        <button
          onClick={() => fetchDataFromCategory("travel")}
          className="bg-black px-6 py-2 rounded-md text-lime-500 font-bold border-4 border-lime-500"
        >
          Travel
        </button>
        <button
          onClick={() => fetchDataFromCategory("food")}
          className="bg-black px-6 py-2 rounded-md text-amber-500 font-bold border-4 border-amber-500"
        >
          Food
        </button>
      </div>
      <InputBar></InputBar>
    </>
  );
};

export default Nav;
