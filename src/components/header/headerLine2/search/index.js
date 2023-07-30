import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Service from '../../../services/service';
import SearchItem from './seachItem';
import { nanoid } from 'nanoid';
import { useClickOutside } from '../../../../hooks';
import s from'./search.module.css';

const Search = () => {
    const[visible, setVisible] = useState(false);
    const[value, setValue] = useState('');
    const[data, setData] = useState(null);  

    useEffect(() => { 
        if(value.length > 1){
            new Service().getProducts(`catalog?q=${value}`)
            .then(data => setData(data)) 
        }
    }, [value]);

    const handleChange = (event) => {
        if(event.target.value.length > 1){
            setVisible(true);
        }
        else{
            setVisible(false);
            setData(null);
        }
        setValue(event.target.value);
    }

    const resetSearch = () => {
        setValue('');
        setData(null);
        setVisible(false);
    }

    const searchRef = useRef(null);
    useClickOutside(searchRef, resetSearch);
    return(
        <>
            <div className={s.search__container}>
                <form autoComplete='off'  className={s.search__container}>
                    <div className={s.search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input value={value} onChange={handleChange} name='search' className={s.input} placeholder='Пошук по каталогу'/>
                    </div>
                </form>
                {visible && (
                    <div className={s.search__list} ref={searchRef}>
                            {Array.isArray(data) && data.length > 0 ? 
                                <>
                                <div className={s.title}>Знайдено <span>{data.length}</span> співпадінь:</div>
                                <ul>
                                {data.map(item => {                
                                    return(
                                        <SearchItem item={item} resetSearch={resetSearch} key={nanoid()}/>
                                    )
                                })}
                                </ul>
                                </>
                                : <div className={s.notFined}>За даним запитом нічого не знайдено</div>
                            }
                    </div>
                )}
            </div>
        </>
    )
}

export default Search;
