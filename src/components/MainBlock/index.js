import React from "react"
import "./styles.scss"
import Slider from "react-slick";
import sliderOne from "../../assets/images/sliderOne.png"
import sliderSecond from "../../assets/images/sliderSecond.png"
import sliderThree from "../../assets/images/sliderThree.png"
import mainImage from "../../assets/images/mainImage.png"

const MainBlock = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };
    return(
        <div className="mainBlock">
            <div className="leftMainBlock">
                <div className="numberBlock">
                    <h1>9</h1>
                </div>
                <Slider {...settings}>
                    <div className="sliderBlock">
                        <div className="sliderImage">
                            <img src={sliderOne} width={509}/>
                        </div>
                        <div className="sliderText">
                            <h1>МЫ ВЕРИМ</h1>
                            <p>В лучшее будущее благодаря дизайну и<br/> создаем более простые, легкие и<br/> привлекательные идеи.</p>
                        </div>
                    </div> 
                    <div className="sliderBlock">
                        <div className="sliderImage">
                            <img src={sliderSecond} width={509}/>
                        </div>
                        <div className="sliderText">
                            <h1>МЫ ПРЕДЛАГАЕМ</h1>
                            <p>Индивидуальный подход к каждому проекту.<br/> Он обусловлен стремлениями и бизнес-<br/>целями наших клиентов, что позволяет нам<br/> отсекать лишнее и вдыхать жизнь в каждую<br/> нашу работу</p>
                        </div>
                    </div> 
                    <div className="sliderBlock">
                        <div className="sliderImage">
                            <img src={sliderThree} width={509}/>
                        </div>
                        <div className="sliderText">
                            <h1>НАША УНИКАЛЬНОСТЬ</h1>
                            <p>Уникальность нашего видения заключается<br/> в комбинировании различных дизайнерских<br/> решений, от фактурного 3Д рендера, до<br/> строгой швейцарской типографики.</p>
                        </div>
                    </div> 
                </Slider>
                
            </div>
            <div className="rightMainBlock">
                <img src={mainImage} width={1400}/>
            </div>
        </div>
    )
}

export default MainBlock;