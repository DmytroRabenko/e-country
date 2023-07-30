import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { useClickOutside } from '../../../hooks';
import Toast from 'react-bootstrap/Toast';
import s from './subscribe.module.css';

function Subscribe (){
    const[showMessage, setShowMessage] = useState(false);
    const[message, setMessage] = useState(null);

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
        fetch('http://localhost:3000/callBack', {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
            body: `mail=${data.mail}`,
        })
        .then(result => result.json())
        .then(msg => setMessage(msg.mail));
        reset();
        setShowMessage(true);
    }

    const formRef = useRef(null);
    useClickOutside(formRef, reset);

    return(
        <>
        <div className={s.subscribe_container}>
            <div className={s.subscribe__content}>
                
                <div className={s.description}>
                    <h4><FontAwesomeIcon icon={faPaperPlane} />Дізнавайтеся про нові акції першими</h4>
                </div>
                <div className={s.input__container} ref={formRef}>

                    <form onSubmit={handleSubmit(onSubmit)}
                    >
                        <input 
                            {...register('mail',{
                                required: 'Введіть ваш Email',
                                pattern: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi,
                            })}
  
                        className={s.input} 
                        placeholder='Ваш email'
                        />
                        <div className={s.error__div}>
                            {errors?.mail && (
                                <p>{errors?.mail?.message || 'Ваш email не коректний'}</p>
                            )}
                        </div>
                        <input type='submit' value={'Підписатися'} className={s.send} />
                    </form>
                    <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide>
                        <Toast.Body>Підписка успішна, новини приходититимуть на email: {message}</Toast.Body>
                    </Toast>              
                </div> 
            </div>   
        </div>
         
        </>
    )
}
export default Subscribe;


/*
 
           
*/