import React, { useState } from 'react'
import Map from './Map'
import './Destination.css'


function Destination() {
  const [origin, setOrigin] =useState('');
  const [destination, setDestination] =useState('');
  return (

    <div className='row mapingRow container'>
     <div className='col'>
      <input className='inputBox' type='text' placeholder='Starting From' onBlur={e =>setOrigin(e.target.value)} /> <br/>
      <input className='inputBox' type='text' placeholder='Going to' onBlur={e =>setDestination(e.target.value)} /><br/>
     </div>

     <div className='col mapArea'>
     <Map origin={origin} destination={destination}></Map>
     </div>
    </div>
    
  )
}

export default React.memo(Destination)