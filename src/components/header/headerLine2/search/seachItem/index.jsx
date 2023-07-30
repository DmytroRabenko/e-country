import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateCurrentPage } from '../../../../../store/storeSlice'
import s from './searchItem.module.css'

const SearchItem = ({item, resetSearch}) => {
    const dispatch = useDispatch(updateCurrentPage);

    return(                           
        <li onClick={resetSearch} className={s.list__item}>
            <Link to={`/${item.category}/${item.brand}/${item.id}`} onClick={() => dispatch(updateCurrentPage(item))}>
                <div className={s.product}>
                    <div className={s.id}>{item.id}</div>
                    <div className={s.type}>{item.type}</div>
                    <div className={s.brand}>{item.brand}</div>
                    <div className={s.model}>{item.model}</div>
                </div>
            </Link>
        </li>
    )
}

export default SearchItem;