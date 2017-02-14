import React, { PropTypes } from 'react';

const Slider = ({ direction, label, min, max, unit, value, onChange }) => (
  <label>
    {label}
    <input
      type="range"
      min={min}
      max={max}
      step="1"
      data-property={label}
      data-direction={direction}
      value={value}
      onChange={onChange}
    />
    {value}{unit}
  </label>
);

Slider.propTypes = {
  direction: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  unit: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  min: 0,
  max: 200,
  unit: '%',
  value: 100,
};

export default Slider;
