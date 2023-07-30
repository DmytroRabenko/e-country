import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { mobNavigationVisible } from '../../../store/storeSlice';
import s from'./mobCatalogButton.module.css';


const MobCatalogButton = ({fn}) => {

    const dispatch = useDispatch(mobNavigationVisible);
    const changeMobNavigationVisible = () => dispatch(mobNavigationVisible());

    return(
        <div className={s.mob_navigation}>
                <button onClick={changeMobNavigationVisible} className={s.button}><FontAwesomeIcon icon={faBars} /><span>Каталог товару</span></button>
        </div>
    )
}
export default MobCatalogButton;
