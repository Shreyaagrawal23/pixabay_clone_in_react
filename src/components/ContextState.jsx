import React, { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";


const ContextState = (props) => {
  const api_key = "45949477-94fbacd3da33fc63b866d5937";
  const [image, setImage] = useState([]);
  const [Qury, setQury] = useState('london');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=${api_key}&q=${Qury}&image_type=photo&pretty=true&per_page=100`
      );

      setImage(data.hits);
    };

    fetchData();
  }, [Qury]);
  const fetchDataFromCategory = async (cat) => {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    setImage(data.hits);
    
  };

  return (
    <Context.Provider
      value={{
        image,
        fetchDataFromCategory,
        setQury
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextState;
