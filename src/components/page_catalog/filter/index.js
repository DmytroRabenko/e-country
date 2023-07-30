import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './filter.module.css';


const Filter = ({ changeFilter }) => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('70000');


  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (value === '' || value[0] !== '0') {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (value === '' || (value.length > 0 && value[0] !== '0')) {
      setMaxPrice(value);
    }
  };

  const handleFilterClick = () => {
    if (!isNaN(minPrice) && !isNaN(maxPrice)){
      if(parseInt(minPrice) > parseInt(maxPrice)){
        setMinPrice('0');
      }
      if(parseInt(maxPrice) > 70000){
        setMaxPrice('50000');
      }
      changeFilter(minPrice, maxPrice);
    } 
  };

  const handleSliderChange = (values) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  return (
    <div className={s.filter}>
      <h4>Фільтр</h4>
      <div className={s.price__container}>
          <span>Ціна, грн</span>
          <div className={s.price__input}>
              <input type="number" value={minPrice} onChange={handleMinPriceChange} />
              <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
            <button onClick={handleFilterClick}>ОК</button>
          </div>
          <div className={s.slider}>
            <Slider
              range
              min={0}
              max={70000}
              value={[parseInt(minPrice), parseInt(maxPrice)]}
              onChange={handleSliderChange}
            />
          </div>
    
      </div>
    </div>
  );
};


export default Filter;
//      <PriceFilter minPrice={0} maxPrice={50000} changeFilter={changeFilter}/>