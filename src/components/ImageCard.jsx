import React from "react";
//Class based Component
class ImageCard extends React.Component {
  render() {
    //destructuring
    const { urls, description } = this.props.image;
    return (
      <div>
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
