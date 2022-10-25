import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Slider () {
    const testInput = [{title: "test1", index: 1}, {title: "test1", index: 2}, {title: "test1", index: 3}, {title: "test1", index: 4}]
    const [position, setPosition] = useState(0)

    function slideRight() {
        if (position <= testInput.length) {
            setPosition(position + 1)
            console.log("yes")
        }
    }

    function slideLeft() {
        if (position >= 0) {
            setPosition(position - 1)
        }
    }
    
    return(
        <div >
            <button onClick={slideLeft}> left </button>
            <button onClick={slideRight}> right </button>
            <motion.div className="slider">
                {testInput.map((item) => (
                    <motion.div 
                    key={item.index} 
                    className="container"
                    animate={{
                        left: (item.index - position) * 500

                    }}>
                        <p>{item.title}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}