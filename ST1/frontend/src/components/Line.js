import React from 'react';
import PropTypes from 'prop-types';

class Line extends React.Component {
  getEuclideanDistance = () => {
    const { point1, point2 } = this.props;
    const distance = Math.sqrt(
      point1.reduce((sum, p1, i) => sum + Math.pow(p1 - point2[i], 2), 0)
    );
    return distance.toFixed(2);
  };

  render() {
    const { point1, point2 } = this.props;
    return (
      <div>
        <h3>Line</h3>
        <p>Point 1: {point1.join(';')}</p>
        <p>Point 2: {point2.join(';')}</p>
        <p>Dimension: {point1.length}</p>
        <p>Euclidean Distance: {this.getEuclideanDistance()}</p>
      </div>
    );
  }
}

Line.propTypes = {
  point1: PropTypes.arrayOf(PropTypes.number).isRequired,
  point2: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Line;
