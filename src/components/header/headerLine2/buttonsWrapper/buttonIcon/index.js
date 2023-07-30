import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

import s from'./buttonIcon.module.css';

const ButtonIcon = ({icon, tooltipTitle, count, link}) =>{
    return(
        <Tooltip title={tooltipTitle} placement="top">
            <Link to={link}>
            <div className={s.button}>
                {icon}
                {count > 0 &&(
                     <span className={s.count}>{count}</span>
                )}
            </div>
            </Link>
        </Tooltip>
    )
}

export default ButtonIcon;