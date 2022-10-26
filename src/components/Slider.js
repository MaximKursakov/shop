import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Slider ({chairInfo}) {

    const [position, setPosition] = useState(1)
    const [containerWidth, setContainerWidth] = useState(0)

    const container = useRef()
    useEffect(() => {
        
        setContainerWidth(container.current.offsetWidth)
        console.log(containerWidth)
    })

    function slideRight() {
        if (position < chairInfo.length -1) {
            setPosition(position + 1)
        }
    }

    function slideLeft() {
        if (position - 1 >= 0) {
            setPosition(position - 1)
        }
    }
    
    return(
        <div className="slider-container">
            <button onClick={slideLeft}> left </button>
            <button onClick={slideRight}> right </button>
            <motion.div ref={container} className="slider">
                {chairInfo.map((item) => (
                    <div>
                        {item.featured 
                        &&<motion.div 
                        key={item.id} 
                        className="container"
                        animate={{
                            left: (item.id - position) * (containerWidth / 2),
                            scale: position === item.id  ? 1.2 : 0.8,
                            opacity: position === item.id  ? 1 : 0.5,
                        }}>
                        <img className="featured-img"src={`images/${item.title}.png`} alt="chair"></img>
                            {position === item.id - 1 
                            && <div className="featured-info">
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>{item.title} Chair</motion.p>
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>{item.price}€</motion.p>
                                </div>}
                        </motion.div>
                    }  
                    </div>  
                ))}
            </motion.div>
        </div>
    )
}