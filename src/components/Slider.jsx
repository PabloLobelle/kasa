import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import dataFile from '../data/housings.json';
import '../style/slider.css'

function Slider () {
    const { id } = useParams()
    const house = dataFile.find((item) => item.id === id);
    const { pictures, description} = house;

    const [current,setCurrent] = useState (0);
    const length = pictures.length;
  
    if(!Array.isArray(pictures) || pictures.lenght <= 0){
        return null;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1  : current - 1)
    }

    return(
        <section className="slider">
            {pictures.length !== 1 && (
            <><i className="fa-solid fa-chevron-left" onClick={prevSlide} /><i className="fa-solid fa-chevron-right" onClick={nextSlide} /><div className="imageNumber"> {current + 1}/{pictures.length} </div></> )}
            {pictures.map((picture, index) => {
				return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img key={`${picture}`} src={picture} alt={description} className='houseImages'/>)}
                    </div>
                	) 
		}
	     )}
        </section>
    )
}
export default Slider;
