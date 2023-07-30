import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';
import s from'./logInForm.module.css';

const LogInForm = ({changeForm ,changeFormVisible}) => {

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
        /*
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
            body: `data=${JSON.stringify(data)}`,      
        })
        */
        reset();
    }
    
    return(

        <div className={s.form}>

            <h4><span>Вхід</span></h4>

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
                        <button className={s.button}>Увійти</button>
                    </div>
                </form>
                <div className={s.next}>
                    <span onClick={() => changeForm()}>Реєстрація</span>
                </div>       
            </div>
            <button onClick={() => changeFormVisible()} className={s.close}><FontAwesomeIcon icon={faX}/></button>
        </div>
    )
}
export default LogInForm;
