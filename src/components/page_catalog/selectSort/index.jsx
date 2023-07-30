import React, { useState, useRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp, faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '../../../hooks';

import s from './selectSort.module.css'

const SelectSort = ({changeSortValue}) => {
    
    const[dropOpen, setDropOpen] = useState(false);
    const changeDropOpen = (arg) => {
      setDropOpen(!dropOpen);
    }
    const selectRef = useRef(null);
    useClickOutside(selectRef, () => {
      if(dropOpen)setDropOpen(false);
    });

    return (
      <div className={s.drop__button} ref={selectRef}>
        <Tooltip title={'Сортувати'} placement="top" >
          <div className={s.select__header} onClick={changeDropOpen} >
            <span>Сортувати<FontAwesomeIcon icon={faChevronDown } /></span>
          </div>
        </Tooltip>
        {dropOpen &&(
          <div className={s.select__body} >
              <div>
            <span onClick={ () => {
              changeSortValue('&_sort=rating&_order=DESC')
              changeDropOpen()
            }}>за рейтингом</span>
          </div>
          <div>
            <span onClick={ () => {
              changeSortValue('&_sort=price&_order=ASC')
              changeDropOpen()
            }}>за ціною<FontAwesomeIcon icon={faArrowUp}/></span>
            </div>
          <div>
            <span onClick={ () => {
              changeSortValue('&_sort=price&_order=DESC')
              changeDropOpen()
            }}>за ціною<FontAwesomeIcon icon={faArrowDown}/></span>
          </div>
          </div>
      )}
        
          
      </div>
    );
}

export default SelectSort;
