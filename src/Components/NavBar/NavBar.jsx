import './NavBar.css'
import { img } from '../../Utils/images.js';
const NavBar = () => {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={img[0].src} alt="STICK2GATHER" />
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="">Testimonials</a>
                    <a href="">Contact Us</a>
                    <a href="">What We Do</a>
                </div>
            </div>
        </>
    )
}

export default NavBar