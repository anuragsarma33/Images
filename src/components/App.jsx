import React from "react";
import axios from "axios";

//Child Component
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  //initial state
  state = { images: [] };
  onSearchSubmit = async term => {
    //make a request for a user with a given ID
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: term },
          headers: {
            Authorization:
              "Client-ID fCHIQHrRgn9c0-fG60y0gN1BH3j8DNVDRSWefBlH3rg"
          }
        }
      );
      //current state results
      this.setState({ images: response.data.results });
    } catch (err) {
      console.log(err, "Unable to fetch");
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        {/* onSubmit is a props name,not an event handler */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
