import React from 'react';
import Logo from './logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ButtonsWrapper from './buttonsWrapper';
import Phones from '../../wrapper_components/phones';
import Search from './search'
import s from './headerLine2.module.css';

function HeaderLine2 () {
    return(
        <div className={s.header__line2}>    
            <div className={s.container}> 
                <Logo/>
                <div className={s.content}>
                    <div className={s.number}>
                        <Phones/>
                    </div>
                    <div className={s.line2}>
                        <div className={s.search}>
                            <Search/>
                            <Link to={'/about_us'}><FontAwesomeIcon icon={faThumbsUp} />Відгуки</Link>
                        </div>
                        <div>
                            <ButtonsWrapper/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default HeaderLine2;