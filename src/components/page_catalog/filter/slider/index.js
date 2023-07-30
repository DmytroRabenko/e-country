import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = ({ minPrice, maxPrice, changeFilter }) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);

  };

  const handleSliderAfterChange = () => {
    changeFilter(minValue, maxValue);
  };

  return (
    <div>
      <Slider
        range
        min={minPrice}
        max={maxPrice}
        value={[minValue, maxValue]}
        onChange={handleSliderChange}
        onAfterChange={handleSliderAfterChange}
      />
      <div>
        {minValue}
        {maxValue}
      </div>
    </div>
  );
};

export default PriceFilter;
