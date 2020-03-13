import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";
//Functional Component
const ImageList = props => {
  const images = props.images.map(image => {
    //render images and assign key to root element
    return (
      <div key={image.id}>
        <ImageCard image={image} />;
      </div>
    );
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
