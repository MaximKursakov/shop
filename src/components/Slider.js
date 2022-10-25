import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Slider () {
    const x = useMotionValue(0)
    
    const scale = useTransform(x, [500, 0, -500], [0.5, 1, 0.5])
    const opacity = useTransform(x, [1000, 500, 0, -500, -1000], [0, 0, 1, 0, 0])
    const carousel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        console.log(width)
    }, [])
    
    
    return(
        <div >
            <motion.div ref={carousel}>
                <motion.button className="slider"
                    
                    drag="x"
                    dragConstraints={{right: 0, left: -width}} 
                    >
                    <motion.div >TEST 1</motion.div>
                    <motion.div >TEST 2</motion.div>
                    <motion.div >TEST 3</motion.div>
                    <motion.div >TEST 4</motion.div>
                    <motion.div >TEST 5</motion.div>
                    <motion.div >TEST 6</motion.div>
                </motion.button>
            </motion.div>
        </div>
    )
}