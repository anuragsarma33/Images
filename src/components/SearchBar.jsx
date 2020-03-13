import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label for="search" style={{ textAlign: "center" }}>
              Image Search
            </label>
            <input type="text" placeholder="search here" id="search" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
