import { useEffect, useState } from "react";
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
      },
      enter: {
        opacity: .8,
        backgroundImage: "rgba(0, 0, 0, 0.6)",
        position: "absolute",
        maxHeight: "100vh",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
      leave: { 
        opacity: 0,}
    }

    const menu = {
        hidden: {
            x: -10, 
            opacity: 0 
        },
        visible: {
            x: 0, 
            opacity: 1
        },
    };

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = 'hidden';}
            else document.body.style.overflow = 'unset';
    }, [menuOpen])

    return(
        <nav>
            <div className="sticky-bar">
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>X</button>
                <AnimatePresence>
                {menuOpen 
                 && <div className="menu">
                    <motion.div variants={variants} initial="from" animate="enter" exit="leave" className="menu-overlay">
                            <motion.h2 variants={menu} initial="hidden" animate="visible" transition={{delay: .3, type: "tween", duration: .5}} className="logo">LOGO</motion.h2>
                            <motion.ul className="menu-links">
                                <motion.li variants={menu} initial="hidden" animate="visible" transition={{delay: .3, type: "tween", duration: .3}} className="menu-link" >LOGIN</motion.li>
                                <motion.li variants={menu} initial="hidden" animate="visible" transition={{delay: .4, type: "tween", duration: .3}} className="menu-link">MY CART<p className="basket-size">{Basket.length}</p></motion.li>
                                <motion.li variants={menu} initial="hidden" animate="visible" transition={{delay: .5, type: "tween", duration: .3}} className="menu-link">WISHLIST<p className="wishlist-size">{wishlist.length}</p></motion.li>
                                
                            </motion.ul>
                            <div className="social-media">
                                <TiSocialInstagramCircular></TiSocialInstagramCircular>
                                <TiSocialYoutubeCircular></TiSocialYoutubeCircular>
                                <TiSocialFacebookCircular></TiSocialFacebookCircular>
                                <TiSocialGooglePlusCircular></TiSocialGooglePlusCircular>
                                <TiSocialTwitterCircular></TiSocialTwitterCircular>
                            </div>
                        </motion.div>
                    </div>
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