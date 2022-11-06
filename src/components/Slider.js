import { motion, useAnimationControls, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Link } from "react-router-dom"

export function Slider ({chairInfo}) {
    let counter = 0
    const [position, setPosition] = useState(2)
    const [containerWidth, setContainerWidth] = useState(0)
    const [sliderPulsing, setSliderPulsing] = useState(Infinity)
    const controlPulse = useAnimationControls()
    controlPulse.start({
        scale: 1.2,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: .5}
    })
    const chairsFiltered = chairInfo.filter((chair) => chair.featured)
    const chairsUpdatedID = chairsFiltered.map(chair => {
                    if(true) {
                        counter++
                        return {...chair, id : counter}
                    }
                    return chair
                })

    const container = useRef()
    useEffect(() => {
        setContainerWidth(container.current.offsetWidth)
    })

    function slideRight() {
        if (position < chairsUpdatedID.length ) {
            setPosition(position + 1)
        }
        controlPulse.stop()
    }

    function slideLeft() {
        if (position-1  > 0) {
            setPosition(position - 1)
        }
        controlPulse.stop()
    }


    return(
        <div className="slider-container">
            <motion.button animate={controlPulse} className="slide-left" onClick={slideLeft}> <AiOutlineLeft></AiOutlineLeft> </motion.button>
            <motion.button animate={controlPulse} className="slide-right" onClick={slideRight}> <AiOutlineRight></AiOutlineRight> </motion.button>
            <motion.div ref={container} className="slider">
                {chairsUpdatedID.map((item) => (
                        <motion.div 
                        key={item.id} 
                        className="container"
                        animate={{
                            left: (item.id - position) * (containerWidth / 1.6),
                            bottom: position === item.id  ? 0 : 100,
                            scale: position === item.id  ? 1.2 : 0.7,
                            opacity: position === item.id  ? 1 : 0.3,
                        }}>
                        
                            {position === item.id 
                            ? <div>
                                <Link to={`/Chairs/${item.title}`} state={{item}}>
                                    <img className="featured-img"src={`shop/images/${item.title}.png`} alt="chair"></img>
                                </Link>
                                <motion.p className="featured-title" initial={{opacity: 0}} animate={{opacity: 1}}>{item.title} Chair</motion.p>
                                <motion.p className="featured-price" initial={{opacity: 0}} animate={{opacity: 1}}>{item.price}.00€</motion.p>
                                </div>
                            : <img className="featured-img"src={`shop/images/${item.title}.png`} alt="chair"></img>
                           
                        }
                        </motion.div> 
                ))}
            </motion.div>
        </div>
    )
}