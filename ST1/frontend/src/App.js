import React from 'react';
import PointInput from './components/PointInput';
import Line from './components/Line';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point1: null,
      point2: null,
    };
  }

  handleCalculate = (point1, point2) => {
    this.setState({ point1, point2 });
  };

  render() {
    const { point1, point2 } = this.state;

    return (
      <div>
        <h1>IMY 220 Semester Test 1</h1>
        <PointInput onCalculate={this.handleCalculate} />
        {point1 && point2 && <Line point1={point1} point2={point2} />}
      </div>
    );
  }
}

export default App;
