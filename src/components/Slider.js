import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function Slider ({chairInfo}) {
    let counter = 0
    const [position, setPosition] = useState(2)
    const [containerWidth, setContainerWidth] = useState(0)
    const chairsFiltered = chairInfo.filter((chair) => chair.featured)
    const chairsUpdatedID = chairsFiltered.map(chair => {
                    if(true) {
                        counter++
                        return {...chair, id : counter}
                    }
                    return chair
                })
                    

    

    // function updateChairID () {
    //     let counter = 0;
    //     chairsUpdatedID(current => 
    //         current.map(chair => {
    //             if(true) {
    //                 console.log(counter)
    //                 counter++
    //                 return {...chair, id : counter}
    //             }
    //             return chair
    //         }))
            
    // }
    // console.log(chairsUpdatedID)
    // useEffect(() => {
    //     updateChairID()
    // },[])


    const container = useRef()
    useEffect(() => {
        setContainerWidth(container.current.offsetWidth)
    })

    function slideRight() {
        if (position < chairsUpdatedID.length ) {
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
                        <img className="featured-img"src={`images/${item.title}.png`} alt="chair"></img>
                            {position === item.id 
                            && <div>
                                <motion.p className="featured-title" initial={{opacity: 0}} animate={{opacity: 1}}>{item.title} Chair</motion.p>
                                <motion.p className="featured-price" initial={{opacity: 0}} animate={{opacity: 1}}>{item.price}.00€</motion.p>
                                </div>}
                        </motion.div> 
                ))}
            </motion.div>
        </div>
    )
}