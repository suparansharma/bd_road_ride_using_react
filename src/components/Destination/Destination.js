import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


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

function Destination() {
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
        <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
    </div>
    
  )
}

export default React.memo(Destination)