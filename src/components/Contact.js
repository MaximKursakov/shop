import Map, { Marker, Popup } from 'react-map-gl';
import { motion } from 'framer-motion';
import { useState } from 'react';
 


export function Contact() {
    const [markerSelected, setMarkerSelected] = useState(false)


    return(
        <div className="contact-container">
            
            
            <h1>Contact Us</h1>
            <div className="contact-column">
                <div>
                    <h2>Lorem Ipsum, LLC</h2>
                    <p>4209 Lorem Ipsum</p>
                    <p>Lorem 202D</p>
                    <p>Lorem 80201</p>
                    <p>+49 000 000 00</p>
                </div>
                <div>
                    <h2>Customer Support</h2>
                    <p>questions@Lorem.com</p>
                    <p>+49 000 000 00</p>
                </div>
            </div>
            <span></span>
            <div className="contact-column"> 
                <div>
                    <h2>Wholesale Inquires</h2>
                    <p>questions@Lorem.com</p>
                    <p>+49 000 000 00</p>
                </div>
                <div>
                    <h2>Order Inquiries</h2>
                    <p>questions@Lorem.com</p>
                </div>
            </div>
            <span></span>
            <div className="contact-column"> 
                <div>
                    <h2>Press Inquires</h2>
                    <p>4209 Lorem Ipsum</p>
                    <p>Lorem 202D</p>
                    <p>Lorem 80201</p>
                    <p>questions@Lorem.com</p>
                </div>
                <div>
                    <h2>Marketing Inquiries</h2>
                    <p>questions@Lorem.com</p>
                </div>
            </div>
            <div className='map'>
                <Map 
                className="map-container"
                initialViewState={{
                    longitude: 11.58598310587922,
                    latitude: 48.16322164738846,
                    zoom: 17,
                }}
                mapboxAccessToken={"pk.eyJ1IjoibWF4aW1rdXJzYWtvdiIsImEiOiJjbGFmNWZod2kxMHAxM3BvMmEwbzk1NHhiIn0.gsgJQTXTMGWMQg6f7RvUHg"}
                style={{width: "100%", height: "100%"}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                >
                <Marker
                latitude={48.16322164738846}
                longitude={11.58598310587922}
                >
                    <motion.div onClick={() => setMarkerSelected(!markerSelected)} whileHover={{scale: 1.1}} className='map-marker'>
                        <img src='./images/location-svgrepo-com.svg'></img>
                    </motion.div>
                </Marker>
                {markerSelected ? (
                    <div>
                    <Popup
                    onClose={() => setMarkerSelected(!markerSelected)}
                    latitude={48.16322164738847}
                    longitude={11.58598310587923}
                    anchor="right">
                        <div>
                            <h3>Location</h3>
                            <p>4209 Lorem Ipsum</p>
                            <p>Lorem 202D</p>
                            <p>Lorem 80201</p>
                        </div>
                    </Popup>
                    </div>
                ) : null}
                <p className='disclaimer'>For development purposes only</p>
                </Map>
            </div>
        </div>
    )
}