import React from "react";

export class Person extends React.Component {
  render() {
    return (
      <div>
        <h2>Person</h2>
        {
          <div>
            <h3>{this.props.person.name}</h3>
            <p>Birth Year: {this.props.person.birth_year}</p>
            <p>Eye Color: {this.props.person.eye_color}</p>
            <p>Gender: {this.props.person.gender}</p>
            <p>Homeworld: {this.props.person.homeworld}</p>
          </div>
        }
      </div>
    );
  }
}
