import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '700px'
};

const location = {
    
  lat: 23.833348,
  lng: 90.419049
};


function Map() {


const [directionResponse, setDirectionResponse] =useState(null);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlLvZr-xXGkQuzjj2tSmOzCKQMahFLh4U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >


<DirectionsService
                  // required
                  options={{
                    destination: this.state.destination,
                    origin: this.state.origin,
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={
                      res =>{
                          if(res !== null){
                              setDirectionResponse(res);
                          }
                      }
                  }
                 
                />




{
    directionResponse &&<DirectionsRenderer
    // required
    options={{ 
      directions: this.state.response
    }}
    
  />
}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)