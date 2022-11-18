import React from "react";
import "./Slide.css";

const Slide = ({placeCalender,
  dayCalender,
  monthCalender, src,}) => {
  return (
    <section className='section'>
      <div className='container_slide'> 
        <img className='slide_flag' src={src} alt="" />
        <h4 className='slide_coutry' >{placeCalender}</h4>
        <span className='slide_day'>{dayCalender < 10 ? `0${dayCalender}` : dayCalender }</span>
        <p className='slide_month'>{monthCalender}</p>
      </div>
    </section>
  );
};

export default Slide;
