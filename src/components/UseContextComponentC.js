import React, { useContext } from 'react'
// importing context created in App.js to use it in this component
import { cityContext, nameContext } from '../App'

function useContextComponentC() {
    // Getting data from App.js that was passed by nameContext
    const myName = useContext(nameContext)
    const city = useContext(cityContext)

  return (
    <div>
      
      <h1 style={{textAlign : 'center'}}>Hello I Am Component C </h1>
      <h2 style={{textAlign : 'center'}}>I have received "{myName}" from App.js file</h2>
      <h2 style={{textAlign : 'center'}}>City "{city}" passed from App.js file</h2>

    </div>
  )
}

export default useContextComponentC
