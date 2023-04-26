import React, { useState } from "react";
import "./styles.scss"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <div className="headerWrapper">
            <div  className="menuWrapper" style={openMenu ? {height: 330, padding: 10} : {height: 0}}>
                <div className="menuBlock" style={openMenu ? {height: 307} : {height: 93}}>
                    <div onClick={() => setOpenMenu(!openMenu)} className="itemMenu">
                        <p>Главная</p>
                    </div>
                    <div onClick={() => setOpenMenu(!openMenu)} className="itemMenu">
                        <p style={{padding: 0}}>О Нас</p>
                    </div>
                    <div onClick={() => setOpenMenu(!openMenu)} className="itemMenu">
                        <p style={{padding: "24px 0px 0px 0px"}}>Услуги</p>
                    </div>
                    <div onClick={() => setOpenMenu(!openMenu)} className="itemMenu">
                        <p style={{padding: "24px 0px"}}>Контакты</p>
                    </div>
                </div>  
            </div>
            
        </div>
    )
}

export default Header;