import React, { useState } from "react";

import Slide from "./Slide/Slide";
import "./Carroussel.scss"; 

const Carroussel = ({data}) => {
    const [current, setCurrent] = useState(0);
    const length = data.length; 

    const prevSlide = () => {
        setCurrent(current === 0 
        ? length - 1 
        : current -1);         
    }

    const nextSlide = () => {
        setCurrent(current === length - 1
        ? 0  
        : current + 1 
        ); 
    }

    return <section className="carroussel">
            {data.map((slide, index)=>(
                index === current
                ?<Slide key={index} data={slide}
                prevSlide={prevSlide}
                nextSlide={nextSlide}/>
                :null
            ))} 
    </section>

}

export default Carroussel; 