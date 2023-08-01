import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import s from './productGalary.module.css';  

const ProductGalary = ({ images }) =>{
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const[imgOpen, setImgOpen] = useState(false);

    const closeImgOpen = () => {
        setImgOpen(false);
      };

    const handleImageClick = (index) => {
        setActiveImageIndex(index);
    };

    const showPrevImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    
    const showNextImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    imgOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    return(
        <div className={s.container}>
            <div className={s.activeImage}>
                <img src={images[activeImageIndex]} alt="Active product" onClick={() => setImgOpen(true)}/>
            </div>
            <div className={s.imageGalary}>
                {(Array.isArray(images) && images.length > 0) && (
                    images.map((image, index) => (
                        <div className={index === activeImageIndex ? `${s.active}` : ''} key={index}>
                            <img 
                                className={s.smallImg}
                                key={index}
                                src={image}
                                alt={`Product ${index}`}
                                onClick={() => handleImageClick(index)}
                                
                            />
                        </div>
                    ))
                )}
            </div>
            {imgOpen && (
                <div className={s.modal_wrapper}>
                    <div className={s.modal_content}>
                    <button onClick={closeImgOpen} className={s.close}><FontAwesomeIcon icon={faX}/></button>
                        <img className={s.foolScreenImg} src={images[activeImageIndex]} alt="Active product" />
                        <button className={s.before} onClick={showPrevImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className={s.next} onClick={showNextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div> 
                </div>
            )}
        </div>
    )        
}      
    

export default ProductGalary;

