import React from "react";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.searchPeople = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (event) => {
    event.preventDefault();
    const search = this.searchInput.current.value;
    this.searchInput.current.value = "";
    if(search !== "") {
      this.props.search(search);
    }
  };

  render() {
    return (
      <form>
        <h2>Search</h2>
        <input type="text" ref={this.searchInput} />
        <br />
        <br />
        <input type="submit" value="Search" onClick={this.handleSearch} />
      </form>
    );
  }
}
