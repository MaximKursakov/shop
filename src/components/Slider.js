import { motion, useMotionValue, useTransform } from "framer-motion"

export function Slider () {
    const x = useMotionValue(0)
    const scale = useTransform(x, [500, 0, -500], [0.5, 1, 0.5])
    const opacity = useTransform(x, [1000, 500, 0, -500, -1000], [0, 0, 1, 0, 0])
    return(
        <div>
            <motion.button className="slider" 
                style={{x:x, scale:scale, opacity: opacity }} 
                transition={{}} drag="x" 
                dragConstraints={{top: 0, bottom: 0}} 
                dragElastic={0}>
                <motion.div>TEST 1</motion.div>
                <motion.div>TEST 2</motion.div>
                <motion.div>TEST 3</motion.div>
            </motion.button>
        </div>
    )
}