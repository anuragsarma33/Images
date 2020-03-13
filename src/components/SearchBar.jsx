import React from "react";
//SearchBar component job is to allow users to type in some inputs and then submit it

class SearchBar extends React.Component {
  //Initial state
  state = { term: "" };
  //handling form submit
  onFormSubmit = e => {
    //prevents to refresh the page
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search" style={{ textAlign: "center" }}>
              Image Search
            </label>
            <input
              type="text"
              placeholder="search here"
              autoComplete="off"
              value={this.state.term}
              id="search"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
