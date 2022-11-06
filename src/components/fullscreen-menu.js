import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TiSocialFacebookCircular, TiSocialGooglePlusCircular, TiSocialInstagramCircular, TiSocialTwitterCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import {IoCloseOutline} from "react-icons/io"
import {AiOutlineClose} from "react-icons/ai"


export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)

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
        hover: {
            color:"white", 
            scale: 1.2,
            transition: {
                delay: 0
            }
        }
    };

    const menuButton = {
        initial: {
            scale : 0
        },
        open : {
            scale: 1,
            transition : {
                duration: .3,
                delay: .3,
            }
        },
        leave : {
            scale: 0,
            transition : {
                duration: .3
            }
        }
    }

    // function toggleMenu() {
    //     setMenuOpen(!menuOpen)
    // }
    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = 'hidden';}
            else document.body.style.overflow = 'unset';
    }, [menuOpen])

    return (
        <>
            <div className="menu-toggle-container">
            <AnimatePresence>
                {!menuOpen &&
                <motion.button 
                className="menu-toggle" 
                onClick={() => setMenuOpen(!menuOpen)}
                variants={menuButton}
                whileHover={{scale: 1.2}}
                initial="initial"
                animate="open"
                exit="leave"><AiOutlineMenu></AiOutlineMenu></motion.button>}
            </AnimatePresence>
            </div>
                <AnimatePresence>
                {menuOpen 
                 && <div className="menu">
                    <motion.div variants={variants} initial="from" animate="enter" exit="leave" onClick={() => setMenuOpen(!menuOpen)} className="menu-overlay">
                    <motion.button onClick={() => setMenuOpen(!menuOpen)}
                    className="menu-close"
                    variants={menuButton}
                    whileHover={{scale: 1.2}}
                    initial="initial"
                    animate="open"
                    exit="leave"><AiOutlineClose></AiOutlineClose></motion.button>
                            <motion.h2 variants={menu} initial="hidden" animate="visible" transition={{delay: .3, type: "tween", duration: .5}} className="logo">LOGO</motion.h2>
                            <motion.ul className="menu-links">
                                <NavLink to="/Home" onClick={() => setMenuOpen(!menuOpen)}><motion.li variants={menu} whileHover="hover" initial="hidden" animate="visible" transition={{delay: .3, type: "tween", duration: .3}} className="menu-link" >Home</motion.li></NavLink>
                                <NavLink to="/Chairs" onClick={() => setMenuOpen(!menuOpen)}><motion.li variants={menu} whileHover="hover" initial="hidden" animate="visible" transition={{delay: .4, type: "tween", duration: .3}} className="menu-link">Product</motion.li></NavLink>
                                <NavLink to="/Contact" onClick={() => setMenuOpen(!menuOpen)}><motion.li variants={menu} whileHover="hover" initial="hidden" animate="visible" transition={{delay: .5, type: "tween", duration: .3}} className="menu-link">Contact</motion.li></NavLink>
                                <NavLink to="/Cart" onClick={() => setMenuOpen(!menuOpen)}><motion.li variants={menu} whileHover="hover" initial="hidden" animate="visible" transition={{delay: .6, type: "tween", duration: .3}} className="menu-link">My Cart</motion.li></NavLink>
                                <NavLink to="/Wishlist" onClick={() => setMenuOpen(!menuOpen)}><motion.li variants={menu} whileHover="hover" initial="hidden" animate="visible" transition={{delay: .7, type: "tween", duration: .3}} className="menu-link">Wishlist</motion.li></NavLink>
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
        </>
    )
}