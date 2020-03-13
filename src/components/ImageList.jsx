import React from "react";

const ImageList = props => {
  const images = props.images.map(image => {
    //render images and assign key to root element
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt="Images" />;
      </div>
    );
  });
  return <div>{images}</div>;
};
export default ImageList;
