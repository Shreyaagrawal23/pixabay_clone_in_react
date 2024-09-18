import React, { useContext } from "react";
import Context from "./Context";

const Images = () => {
  const { image } = useContext(Context);
  console.log(image);
  return (
    <div className="p-[6%]">
      <div
        className="flex justify-center items-center flex-wrap gap-10 
    grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] "
      >
        {image.map((data) => (
          <div key={data.id}>
            <div>
              <img
                className="transition-transform ease-in-out hover:translate-y-2 hover:scale-110 duration:500 object-cover rounded border-2 "
                src={data.largeImageURL}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
