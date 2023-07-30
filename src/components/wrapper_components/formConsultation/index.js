import React, { useState, useRef } from 'react';
import InputMask from "react-input-mask";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useClickOutside } from '../../../hooks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faX } from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-bootstrap/Toast';
import {formVisible} from '../../../store/storeSlice'
import Service from '../../services/service';
import moment from 'moment';
import s from'./formConsultation.module.css';


const FormConsultation = () => {
    const[showMessage, setShowMessage] = useState(false);
    const[showForm, setShowForm] = useState(true);

    const dispatch = useDispatch(formVisible);
    const changeFormVisible = () => dispatch(formVisible());

    const formRef = useRef(null);
    useClickOutside(formRef, changeFormVisible);

    const {
        register,
        formState: {
            errors
        },
        handleSubmit = (event) =>{
            event.preventDefault()
        },
        reset,
    } = useForm({
        mode: 'onBlur',
    });
    
    const onSubmit = data => {
        let date = moment().format('DD-MM-YYYY H:mm');
        data.date = date;
        new Service().postData('callBack', data); 
        reset();
        setShowMessage(true);
        setShowForm(false);
        setTimeout(changeFormVisible,3000);
    }
    document.body.style.overflow = "hidden";
    return(
            <div className={s.form__container}>
                {showForm && (
                <div className={s.form} ref={formRef}>         
                    <h4>Зворотній дзвінок</h4>
                    <div>
                        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>    
                            <div className={s.input__container}>
                                <label>Ваше ім'я <span>*</span></label>
                                <input className={errors?.name ? `${s.error}` : ""}
                                    {...register('name',{
                                        required: `Обовязково до заповнення`,
                                        minLength: {value: 2},
                                    })} 
                                />
                                <div className={s.error__div}>
                                    {errors?.name && (<p>{errors?.name?.message || 'Мінімум два символи'}</p>)}
                                </div>
                            </div>
                            <div className={s.input__container}>
                                <label>Ваш телефон <span>*</span></label>
                                <InputMask
                                        {...register('phone',{
                                            required: `Обовязково до заповнення`,
                                            pattern: /[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/gi,//eslint-disable-line
                                        })} 
                                        mask="+38 (099) 999-99-99">
                                </InputMask>
                                <div className={s.error__div}>
                                    {errors?.phone && (<p>{errors?.phone?.message || 'Введіть номер телефону повністю'}</p>)}
                                </div>
                            </div>
                            <div className={s.input__container}>
                                <label>Що вас цікавить?</label>
                                <textarea {...register('text',{})} className={s.textarea} maxLength={150}/>   
                            </div>
                            <div className={s.input__container}>
                                <button className={s.button}><FontAwesomeIcon icon={faPhoneVolume} />Передзвоніть мені</button>
                            </div>
                        </form>
                    </div>
                    <button onClick={changeFormVisible} className={s.close}><FontAwesomeIcon icon={faX}/></button>
                </div>
                )}
                <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide>
                        <Toast.Body>Заявку прийнято, очікуйте на дзвінок від нашого менеджера!</Toast.Body>
                </Toast> 

            </div>
    )
}
export default FormConsultation;
