import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { loginVisible } from '../../../../store/storeSlice';
import s from'./account.module.css';

function Account(){
    const dispatch = useDispatch();
    return(
        <div >
            <button onClick={() => dispatch(loginVisible())} className={s.account}><FontAwesomeIcon icon={faUser} />Кабінет</button>
        </div>
    )
}


export default Account;