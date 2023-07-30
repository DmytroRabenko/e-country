import React from 'react';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Service from '../../services/service';
import s from'./signUpForm.module.css';

const SignUpForm = ({changeForm ,changeFormVisible}) => {

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
        data.date = moment().format('DD-MM-YYYY H:mm');
        new Service().postData('users', data);
        reset();
        setTimeout(function(){
            window.location.href = '/';
          }, 3000);
    }
    
    return(
    
        <div className={s.form}>         
            <h4><span>Реєстрація</span></h4>
            <div>
                <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>    
                    <div className={s.input__container}>
                        <label>Логін <span>*</span></label>
                        <input className={errors?.name ? `${s.error}` : ""}
                            {...register('login',{
                                required: `Обовязково до заповнення`,
                                pattern: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi,
                            })} 
                            placeholder='email'
                        />
                        <div className={s.error__div}>
                            {errors?.login && (<p>{errors?.login?.message || 'Ваш логін не коректний'}</p>)}
                        </div>
                    </div>
                    <div className={s.input__container}>
                        <label>Пароль <span>*</span></label>
                        <input 
                            {...register('password',{
                                required: 'Обовязково до заповнення',
                                minLength: {value: 6},
                            })}
                        className={s.input} 
                        />
                        <div className={s.error__div}>
                            {errors?.password && (<p>{errors?.password?.message || 'Мінімум 6 символів'}</p>)}
                        </div>
                    </div>
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
                        <button className={s.button}>Зареєструватися</button>
                    </div> 
                </form>
                <div className={s.next}>
                        <span onClick={() => changeForm()}>Вхід</span>
                </div>
            </div>
            <button onClick={() => changeFormVisible()} className={s.close}><FontAwesomeIcon icon={faX}/></button>
        </div>

    )
}
export default SignUpForm;
