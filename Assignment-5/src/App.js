import React from "react";
import { StarWars } from "./components/StarWars";

// They do not have to use App, they can import StarWars directly to index.js
class App extends React.Component {
  render() {
    return (
      <div>
        <StarWars /> 
      </div>
    );
  }
}

export default App;
