import React, {useState, useEffect} from 'react';
import "./Nav.css";


function Nav() {

    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY>100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar); 
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <div className="nav_logo">
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" width="80px" />
                </div>
                <div className="nav_avatar">
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="profile logo" height="30px" width="30px"/>
                </div>
                                             
            </div>                  
        </div>
    )
}


export default Nav;
