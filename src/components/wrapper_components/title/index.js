import React from 'react';

import s from'./title.module.css';

function Title ({text}){
    return(
            <h2 className={s.title}>{text}</h2>
    )
}
export default Title;