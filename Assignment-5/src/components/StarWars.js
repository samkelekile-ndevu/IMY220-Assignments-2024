import React from "react";
import { fetchStarWars, fetchStarWarsBySearch } from "../../api";
import { Search } from "./Search";
import { Person } from "./Person";

export class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no: 1,
      person: null,
      error: null,
    };

    this.getStarWars = this.getStarWars.bind(this);
    this.searchStarWars = this.searchStarWars.bind(this);
  }

  getStarWars = async (no) => {
    const data = await fetchStarWars(no);
    if (data.error) {
      this.setState((prev) => ({ ...prev, person: null, error: data }));
    } else {
      this.setState((prev) => ({ ...prev, person: data, error: null }));
    }
  };

  searchStarWars = async (search) => {
    search = search.toLowerCase();
    const data = await fetchStarWarsBySearch(search);
    if (data.error) {
      this.setState((prev) => ({ ...prev, person: null, error: data }));
    } else {
      this.setState((prev) => ({ ...prev, person: data, error: null }));
    }
  }

  componentDidMount() {
    this.getStarWars(1);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.no !== this.state.no) { // must check using guard clause to avoid infinite loop
      this.getStarWars(this.state.no);
    }
    // can also use a search state variable and update the search here
  }

  render() {
    return (
      <div>
        <h2>Activity Feed</h2>
        <Search
          search={this.searchStarWars}
        />
        <button onClick={() => this.setState((prev) => ({ ...prev, no: prev.no - 1 }))}>
          Previous
        </button>
        <button onClick={() => this.setState((prev) => ({ ...prev, no: prev.no + 1 }))}>
          Next
        </button>
        {this.state.person && (
          <Person
            person={this.state.person}
          />       
        )}
        {this.state.error && <p>Error: {this.state.error.error_message}</p>}
      </div>
    );
  }
}