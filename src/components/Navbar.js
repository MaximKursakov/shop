import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { TiSocialFacebookCircular, TiSocialGooglePlusCircular, TiSocialInstagramCircular, TiSocialTwitterCircular, TiSocialYoutubeCircular } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from "./fullscreen-menu";


export function Navbar({Basket, wishlist}) {
    

    
    return(
        <nav>
            <div className="sticky-bar">
            </div>
            <div className="navbar">
                <div className="logo">LOGO</div>
                <Menu></Menu>
                <div className="navbar-links">
                    <div className="navlink">
                        <NavLink to="/Home">Home</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="/Chairs">Product</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="Contact">Contact</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="Cart">Basket ({Basket.length})</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                    <div className="navlink">
                        <NavLink to="Wishlist">Wishlist ({wishlist.length})</NavLink>
                        <span className="hover-navlink"></span>
                    </div>
                </div>

                
            </div>
        </nav>


                 
               
            
    )
}