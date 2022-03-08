import React from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


import "./Slide.scss"; 

const Slide = ({data, prevSlide, nextSlide}) => {
    return <div className="slide active">
        <ArrowCircleLeftIcon className="arrow-right"
        onClick={prevSlide}/>
        <ArrowCircleRightIcon className="arrow-left"
        onClick={nextSlide}/>
        <img src={data.img} alt={data.title} 
        className="slide-img"/>
    </div>
}

export default Slide; 