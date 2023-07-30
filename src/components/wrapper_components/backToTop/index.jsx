import React,{ useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import s from'./backToTop.module.css';

const BackToTop = () => {
    //const[buttonOpen, setButtonOpen] = useState(false);
    const [scroll, setScroll] = useState(0);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
      };

    return(
        <>
        {scroll > document.documentElement.clientHeight && (
            <button onClick={handleUpButton} className={s.button}><FontAwesomeIcon icon={faArrowUp} /></button>)}
        </>
    ) 
}
export default BackToTop;
