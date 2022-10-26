import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Slider ({chairInfo}) {

    const [position, setPosition] = useState(2)
    const [containerWidth, setContainerWidth] = useState(0)
    // const [featuredChairs, setFeaturedChairs] = useState(chairInfo.filter((chair) => chair.featured))

    const featuredChairs = chairInfo.filter((chair) => chair.featured)
    

    const container = useRef()
    useEffect(() => {
        
        setContainerWidth(container.current.offsetWidth)
    })

    function slideRight() {
        if (position < featuredChairs.length ) {
            setPosition(position + 1)
        }
    }

    function slideLeft() {
        if (position-1  > 0) {
            setPosition(position - 1)
        }
    }
    
    return(
        <div className="slider-container">
            <button onClick={slideLeft}> left </button>
            <button onClick={slideRight}> right </button>
            <motion.div ref={container} className="slider">
                {featuredChairs.map((item) => {
                    
                    return(
                    <div>
                        <motion.div 
                        key={item.id} 
                        className="container"
                        animate={{
                            left: (item.id - position) * (containerWidth / 1.3),
                            scale: position === item.id  ? 1.2 : 0.8,
                            opacity: position === item.id  ? 1 : 0.5,
                        }}>
                        <img className="featured-img"src={`images/${item.title}.png`} alt="chair"></img>
                            {position === item.id 
                            && <div className="featured-info">
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>{item.title} Chair</motion.p>
                                <motion.p initial={{opacity: 0}} animate={{opacity: 1}}>{item.price}€</motion.p>
                                </div>}
                        </motion.div> 
                    </div>  
                )})}
            </motion.div>
        </div>
    )
}