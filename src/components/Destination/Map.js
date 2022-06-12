import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker,DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const containerStyle = {
  width: '350px',
  height: '350px'
};

const location = {
    
  lat: 23.833348,
  lng: 90.419049
};  

const onLoad = marker => {
    console.log('marker: ', marker)
  }

const Map = () => {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <div className="mapArea">
        <LoadScript
              googleMapsApiKey="AIzaSyAlLvZr-xXGkQuzjj2tSmOzCKQMahFLh4U"
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
              >
                { /* Child components, such as markers, info windows, etc. */ }
                {/* <Marker
              onLoad={onLoad}
              position={location}
            /> */}
               <DirectionsService
                  // required
                  options={{ 
                    destination: 'Gulshan 1 circle Dhaka Bangladesh',
                    origin: 'Bannai 11 City Bank Dhaka Bangladesh',
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={res =>{
                    if(res !==null){
                        setDirectionResponse(res);
                    }
                  }}
                
                />

                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                  
                  />
                }
              </GoogleMap>


           


            </LoadScript>
            </div>
    );
};

export default Map;