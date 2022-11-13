import Map, { Layer, Marker, Source } from 'react-map-gl';
 


export function Contact() {
    const geojson = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature', geometry: {type: "point", coordinates: [11.58598310587922, 48.16322164738846]}}
        ]
      };

    // const layerStyle = {
    //     id: 'point',
    //     type: 'circle',
    //     paint: {
    //       'circle-radius': 10,
    //       'circle-color': '#007cbf'
    //     }
    //   };

    return(
        <div className="contact-container">
            <Map
            initialViewState={{
                longitude: 11.58598310587922,
                latitude: 48.16322164738846,
                zoom: 17,
            }}
            mapboxAccessToken={"pk.eyJ1IjoibWF4aW1rdXJzYWtvdiIsImEiOiJjbGFmNWZod2kxMHAxM3BvMmEwbzk1NHhiIn0.gsgJQTXTMGWMQg6f7RvUHg"}
            style={{width: 600, height: 400}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            >
            <Marker
            latitude={48.16322164738846}
            longitude={11.58598310587922 }
            // zoom={17}
            >
                <div className='map-marker'>my marker</div>
            </Marker>
            </Map>
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
        </div>
    )
}