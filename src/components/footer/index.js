import React from 'react';
import Subscribe from './subscribe';
import Footerline1 from './footerline1';
import Footerline2 from './footerline2';

import s from './footer.module.css';



function Footer (){
    return(
        <footer>
            <div className={s.footer_container}>
                <Subscribe/>    
                <Footerline1/>
                <Footerline2/>
            </div>
        </footer>
    )
}
export default Footer