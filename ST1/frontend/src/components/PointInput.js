import React from 'react';
import PropTypes from 'prop-types';

class PointInput extends React.Component {
  constructor(props) {
    super(props);
    this.point1Ref = React.createRef();
    this.point2Ref = React.createRef();
  }

  handleCalculate = () => {
    const point1 = this.point1Ref.current.value.split(';').map(Number);
    const point2 = this.point2Ref.current.value.split(';').map(Number);
    this.props.onCalculate(point1, point2);
  };

  render() {
    return (
      <div>
        <h3>Point Input</h3>
        <input type="text" ref={this.point1Ref} placeholder="Point 1 (e.g., 7;8)" />
        <br />
        <input type="text" ref={this.point2Ref} placeholder="Point 2 (e.g., 1;4)" />
        <br />
        <button onClick={this.handleCalculate}>Calculate</button>
      </div>
    );
  }
}

PointInput.propTypes = {
  onCalculate: PropTypes.func.isRequired,
};

export default PointInput;
