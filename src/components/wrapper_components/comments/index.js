import React, {useEffect, useState} from 'react';
import Rating from '@mui/material/Rating';
import Service from '../../services/service';
import { nanoid } from 'nanoid';
import s from'./comments.module.css';


const Comments = ({link}) => {

    const[data, setData] = useState([]);
     
    useEffect( () => {
        new Service().getProducts(`${link}`)
        .then(data => {
            if(link === 'reviews'){
                setData(data);
            }
            else{
                setData(data.reviews);
            }
        });
       // eslint-disable-next-line 
    },[])

    return(

        Array.isArray(data) && data.length > 0 ?
            <>
                <div className={s.request__quantity}>Всього відгуків: {data.length}</div>
         
                <div className={s.request__highcontainer}>
                    <div className={s.request__container}>
                        {Array.isArray(data) && (
                                data.map((item)=>{
                                    
                                    const comment = JSON.parse(item.data);
                                    return(
                                        <div key={nanoid()} className={s.comment__container}>
                                            <span><Rating name="half-rating-read" value={comment.rating.value} precision={0.5} size="small" readOnly /> </span>
                                            <p>{`${comment.text} -`}</p>
                                            <span>{comment.name}</span> <span className={s.comment__date}>{comment.date}</span>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </>
            : 
            <div className={s.noReviews}>Щодо даного товару не має жодного відгука.</div>
    )  
}


export default Comments;

/*
 
*/