import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion} from "framer-motion";
import { TiSocialFacebookCircular, TiSocialGooglePlusCircular, TiSocialInstagramCircular, TiSocialTwitterCircular, TiSocialYoutubeCircular } from "react-icons/ti";


export function Navbar({Basket, wishlist}) {
    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen)

    const variants = {
    from: {
        opacity: 0,
        transform: "scale(0.80)"
      },
      enter: {
        opacity: .8,
        transform: "scale(1)",
        backgroundImage: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        maxHeight: "100vh",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      },
      leave: { opacity: 0, transform: "scale(0)" },
    }

    return(
        <nav>
            <div className="sticky-bar">
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>X</button>
                <AnimatePresence>
                {menuOpen 
                 && <motion.div variants={variants} initial="from" animate="enter" exit="leave"  className="menu">
                        <h2 className="logo">LOGO</h2>
                        <div>
                            <NavLink to="Login"><p className="stick-bar-link">LOGIN</p></NavLink>
                            <NavLink to="/Cart"><p className="stick-bar-link">MY CART <div className="basket-size">{Basket.length}</div></p></NavLink>
                            <NavLink to="/Wishlist"><p className="stick-bar-link">WISHLIST <div className="wishlist-size">{wishlist.length}</div></p></NavLink>
                        </div>
                        <div className="social-media">
                            <TiSocialInstagramCircular></TiSocialInstagramCircular>
                            <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
                            <TiSocialFacebookCircular></TiSocialFacebookCircular>
                            <TiSocialGooglePlusCircular></TiSocialGooglePlusCircular>
                            <TiSocialTwitterCircular></TiSocialTwitterCircular>
                        </div>
                    </motion.div>
                 }
                 </AnimatePresence>
               
            </div>
            <div className="navbar">
                <div className="logo">LOGO</div>
                <div className="navbar-links">
                    <div className="navlink1">
                        <NavLink to="/Home">Home</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink2">
                        <NavLink to="/Chairs">Product</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink3">
                        <NavLink to="Contact">Contact</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}