import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {formVisible} from '../../../store/storeSlice'

import s from'./callBackButton.module.css';

const CallBackButton = () => {
    const dispatch = useDispatch(formVisible);
    return(
        <div className={s.callback}> 
            <button onClick={ () => dispatch(formVisible())}><FontAwesomeIcon icon={faPhoneVolume}/></button>
        </div>
    )
}
export default CallBackButton;
