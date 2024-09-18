import React, { useContext } from "react";
import Context from "./Context";

const InputBar = () => {
  const { setQury } = useContext(Context);
  return (
    <div className="flex justify-center items-center mt-5">
      <input
        onChange={(e) => setQury(e.target.value)}
        type="text"
        placeholder="Enter text..."
        className="w-full text-black font-bold max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        spellCheck='false'
      />
    </div>
  );
};

export default InputBar;
