import React, { useState } from 'react';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch } from 'react-redux';
import { clearBasket } from '../../../store/storeSlice';
import moment from 'moment';
import Service from '../../services/service';
import s from'./formOrder.module.css';



const FormOrder = ({products, totalValue}) => {
    const dispatch = useDispatch(clearBasket);
    const clearBasketFn = () => dispatch(clearBasket());

    const[delivery, setDelivery] = useState('');
    const changeDelivery = (event) => {
        setDelivery(event.target.value);
    }
    const[payment, setPayment] = useState('');
    const changePayment = (event) => {
        setPayment(event.target.value);
    }

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
        let date = moment().format('DD-MM-YYYY H:mm');
        data.date = date;
        data.order = products;
        data.totalValue = totalValue;
        new Service().postData('orders', data);
        setShowMessage(true);
        setTimeout(function(){
            window.location.href = '/';
          }, 3000);
        setTimeout(reset, 3000);
        setTimeout(clearBasketFn, 3000); 
    }

    return(
        <>
            <div className={s.form}>         
                <h4><span>Заповніть форму</span></h4>
                <div>
                    <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>   

                        <div className={s.container__select}>
                            <div className={s.input__container}>
                                <label>Спосіб доставки</label>
                                <select 
                                    setvalue={delivery} 
                                    onChange={changeDelivery}
                                    {...register('delivery')} 
                                >
                                    <option>Доставка Новою поштою</option>
                                    <option>Доставка Укр поштою</option>
                                    <option>Самовивіз з нашого магазину</option>
                                </select>
                            </div>
                            <div className={s.input__container}>
                                <label>Спосіб оплати</label>
                                <select 
                                    setvalue={payment} 
                                    onChange={changePayment}
                                    {...register('paymant')} 
                                >
                                    <option>Оплата при отриманні</option>
                                    <option>Оплата за реквізитами</option>
                                    <option>Кредит</option>
                                </select>
                            </div>
                        </div>


                        <div className={s.container__input}>  
                            <div className={s.input__container}>
                                <label>ПІБ<span>*</span></label>
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
                        </div>


                        <div className={s.container__input}>  
                            <div className={s.input__container}>
                                <label>Email<span>*</span></label>
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
                                <label>Телефон <span>*</span></label>
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
                            
                        </div> 


                        <div className={s.container__textarea}>
                            <label>Адреса доставки та інші деталі</label>
                            <textarea {...register('text',{})} className={s.textarea} maxLength={200}/>   
                        </div>
                        <div className={s.input__container}>
                                <button  className={s.button}>Підтвердити замовлення</button>
                        </div>
                       
                    </form>

                    <ToastContainer position="'bottom-center'," className="p-3" style={{ zIndex: 1 }}>
                        <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide>
                            <Toast.Body>Замовлення прийнято, очікуйте на дзвінок від нашого менеджера!</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </div>
            </div>
            
        </>

    )
}
export default FormOrder;
