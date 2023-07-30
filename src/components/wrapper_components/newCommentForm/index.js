import React, { useState }from 'react';
import { useForm } from 'react-hook-form';
import Rating from '@mui/material/Rating';
import Toast from 'react-bootstrap/Toast';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Service from '../../services/service';
import s from'./newCommentForm.module.css';


const NewCommentForm = ({link}) => {
    const [value, setValue] = useState(5);
    const[showMessage, setShowMessage] = useState(false);

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
        new Service().postData(`${link}`, data); 
        reset();
        setShowMessage(true)
    }

    return(
        <div className={s.form__containet}>
            <h4>Залишити відгук</h4>

            <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>   

                <div className={s.top__container}>

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
                        <label>Ваша пошта <span>*</span></label>
                            <input className={errors?.name ? `${s.error}` : ""}
                                {...register('mail',{
                                    required: `Обовязково до заповнення`,
                                    pattern: /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/gi,
                                })} 
                            />
                            <div className={s.error__div}>
                                {errors?.mail && (<p>{errors?.mail?.message || 'Ваш email не коректний'}</p>)}
                            </div>
                    </div> 
                                          
                </div>
                           
                <div className={s.textarea__container}>
                    <label>Текс повідомлення <span>*</span></label>
                    <textarea className={s.textarea} maxLength={300}
                        {...register('text',{
                            required: `Обовязково до заповнення`,
                            minLength: {value: 10},
                        })} 
                    />
                    <div className={s.error__div}>
                        {errors?.text && (<p>{errors?.name?.text || 'Мінімум десять символів'}</p>)}
                    </div> 
                </div>

                
                    
                <div className={s.rating__container}>
                    <label>Оцінка</label>
                    <Rating
                        {...register('rating',{
                            value: {value}
                        })} 
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                </div>

                
                <div className={s.input__container}>
                    <button className={s.button}><FontAwesomeIcon icon={faPencil} />Додати коментар</button>
                </div>
            </form>
            <div className={s.message}>
                <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide>
                    <Toast.Body>Ваш відгук прийнято. Незабаром він з'явиться на сайті.</Toast.Body>
                </Toast> 
            </div>

        </div>
    )
}
export default NewCommentForm;