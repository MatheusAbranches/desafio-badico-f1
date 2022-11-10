import React from "react";
import "./Slide.css";

import FlagBahrain from "../../../img/flags/bahrain.png";

const Slide = () => {
  return (
    <section className='section'>
      <div className='container_slide'> 
        <img className='slide_flag' src={FlagBahrain} alt="" />
        <h4 className='slide_coutry' >BAHRAIN</h4>
        <span className='slide_day'>10</span>
        <p className='slide_month'>APR</p>
      </div>
    </section>
  );
};

export default Slide;
