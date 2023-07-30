import React from 'react';
import HeaderLine1 from './headerLine1/headerLine1';
import HeaderLine2 from './headerLine2/headerLine2';

import './header.css';

const Header = () => {

    return(
        <header>
            <div className='header__container'>
                <HeaderLine1/>  
                <HeaderLine2/>
            </div>
        </header> 
    )
}

export default Header;
