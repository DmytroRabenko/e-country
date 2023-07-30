import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from '@fortawesome/free-regular-svg-icons';
import {formVisible} from '../../../store/storeSlice'
import s from'./openFormButton.module.css';

const OpenFormButton = ({text}) => {
    const dispatch = useDispatch(formVisible);

    return(
        <div className={s.button_container}>
            <button onClick={ () => dispatch(formVisible())} className={s.button}><FontAwesomeIcon icon={faComments} />{text}</button>
        </div>
    )
}
export default OpenFormButton;