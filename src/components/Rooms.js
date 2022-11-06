import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"



export function Rooms() {
    const [barOptions, setBarOptions] = useState(false)
    const [diningOptions, setDiningOptions] = useState(false)
    const [livingOptions, setLivingOptions] = useState(false)

    return(
        <div className="rooms-container">
            <div className="column1">
                <motion.h2 className="room-title" animate={{y: barOptions ? -120 : 0}} transition={{duration: .3}}>BAR</motion.h2>
                {barOptions
                && <motion.ul 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: .3}}
                className="rooms-categories">
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Chairs</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Stools</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Barstools</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Tub chairs</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Bench seating</motion.li></Link>
                    </motion.ul>}
                <motion.button 
                onClick={() => setBarOptions(!barOptions)}
                className="room-button"
                whileHover={{scale: 1.1}}
                animate={{y: barOptions ? 120 : 0}}
                transition={{duration: .3}}>SHOP NOW
                </motion.button>
            </div>
            <div className="column2">
                <motion.h2 className="room-title" animate={{y: diningOptions ? -120 : 0}} transition={{duration: .3}}>DINING ROOM</motion.h2>
                {diningOptions
                && <motion.ul 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: .3}}
                className="rooms-categories">
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Dining Chairs</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Tables</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Kitchen Islands</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Wine Racks</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Display Cabinets</motion.li></Link>
                    </motion.ul>}
                <motion.button 
                onClick={() => setDiningOptions(!diningOptions)}
                className="room-button"
                whileHover={{scale: 1.1}}
                animate={{y: diningOptions ? 120 : 0}}
                transition={{duration: .3}}>SHOP NOW
                </motion.button>
            </div>
            <div className="column3">
                <motion.h2 className="room-title" animate={{y: livingOptions ? -120 : 0}} transition={{duration: .3}}>LIVING ROOM</motion.h2>
                {livingOptions
                && <motion.ul 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: .3}}
                className="rooms-categories">
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Chairs</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Sofas</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Sideboards</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Coffee Tables</motion.li></Link>
                        <Link><motion.li initial={{opacity: 0.6}} whileHover={{opacity: 1, scale: 1.2}}>Cabinets</motion.li></Link>
                    </motion.ul>}
                <motion.button 
                onClick={() => setLivingOptions(!livingOptions)}
                whileHover={{scale: 1.1}}
                className="room-button"
                animate={{y: livingOptions ? 120 : 0}}
                transition={{duration: .3}}>SHOP NOW
                </motion.button>
            </div>
        </div>
    )
}