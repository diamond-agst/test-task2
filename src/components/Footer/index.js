import React from "react"
import "./styles.scss"
import footerImage from "../../assets/images/footerImage.png"

const Footer = () => {
    return(
        <div className="footerBlock">
            <img src={footerImage} width="100%"/>
        </div>
    )
}

export default Footer;