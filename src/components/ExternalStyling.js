import React from 'react'
import './ExternalStyling.css'

function ExternalStyling(props) {
  let x=props.value==false? 'myFont' : 'myFont2';

  return (
    <div>
      {/* <h1 className='myFont'>Sherry</h1> */}
      {/* <h1 className='myFont myFont2'>Sherry</h1> */}
      <h1 className={x}>Sherry</h1>
      <h1 className={`${x}`}>Sherry</h1>

    </div>
  )
}

export default ExternalStyling
