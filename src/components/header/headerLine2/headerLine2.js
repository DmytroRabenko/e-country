import React from 'react';
import Logo from './logo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ButtonsWrapper from './buttonsWrapper';
import Phones from '../../wrapper_components/phones';
import Search from './search';
import { useMediaQuery } from 'react-responsive';
import s from './headerLine2.module.css';

const HeaderLine2 = () => {
    const isPc = useMediaQuery({ minWidth: 769});
    return(
        <div className={s.header__line2}>    
            <div className={s.container}> 
                {isPc && (
                    <Logo/>
                )}
                <div className={s.content}>
                    {isPc && (
                        <div className={s.number}>
                            <Phones/>
                        </div>
                    )}
                    <div className={s.line2}>
                        <div className={s.search}>
                            <Search/>
                            {isPc && (
                                <Link to={'/about_us'}><FontAwesomeIcon icon={faThumbsUp} />Відгуки</Link>
                            )} 
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