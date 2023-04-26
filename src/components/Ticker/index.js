import React from "react";
import "./styles.scss"
import Marquee from "react-double-marquee";
import tickerImage from "../../assets/images/tickerImage.png"

const Ticker = () => {
    return(
        <div className="tickerBlock">
            <Marquee>
                  <span className="tickerText">ВЗГЛЯНИТЕ НА НАШИ РАБОТЫ <img src={tickerImage}/>ВЗГЛЯНИТЕ НА НАШИ РАБОТЫ</span>  
            </Marquee>
        </div>
    )
}

export default Ticker;