import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useClickOutside } from '../../hooks'
import {loginVisible} from '../../store/storeSlice'
import LogInForm from './loginForm';
import SignUpForm from './signUpForm';
import s from'./logInPage.module.css';


const LogInPage = () => {

    const[signInToOpen, setSignInToOpen] = useState(true);

    const changeForm = () => {
        setSignInToOpen(!signInToOpen)
    }

    const dispatch = useDispatch(loginVisible);
    const changeFormVisible = () => dispatch(loginVisible());

    const formRef = useRef(null);
    useClickOutside(formRef, changeFormVisible);


    document.body.style.overflow = "hidden";
    
    return(
        <div className={s.form__container}>
            <div className={s.content} ref={formRef}>
                {signInToOpen ?
                    <LogInForm changeForm={changeForm} changeFormVisible={changeFormVisible}/>
                :
                    <SignUpForm changeForm={changeForm} changeFormVisible={changeFormVisible}/>
                }
            </div>
        </div>
        

        
    )
}
export default LogInPage;
