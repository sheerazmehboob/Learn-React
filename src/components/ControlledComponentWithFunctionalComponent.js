import React, { useState } from 'react'

function ControlledComponentWithFunctionalComponent() {
  // Creating State to save form data  
  const [name,setName] = useState("");
    
  // handleChange function runs when vlaue of text box updated
    const handleChange = (e) =>  {
        setName(e.target.value.toUpperCase().substring(0,10))
        console.log(e.target.value);
    }
    
  // formSubbmission function runs when form submitted to get its values 
    const formSubmission = (e) => {
      e.preventDefault();
      console.log(e.target[0].value);
    }

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <form style={{display:'flex',justifyContent:'center',marginTop:'30px', flexDirection:'column', width:'400px', alignItems:'center'}} onSubmit={formSubmission}>
          
            <h1>Form</h1>
            <input  type="text" name="Name" id="Name" value={name} onChange={handleChange}/>
            <input style={{margin:'10px'}} type="submit" value="Submit" />

        </form>  
    </div>
  )
}

export default ControlledComponentWithFunctionalComponent
