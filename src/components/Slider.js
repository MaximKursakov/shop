import { motion } from "framer-motion"

export function Slider () {
    return(
        <div>
            <motion.button className="slider" drag dragConstraints={{top: 0, bottom: 0}} dragElastic={0}>
                TEST
            </motion.button>
        </div>
    )
}