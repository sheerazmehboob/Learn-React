import React from "react";
import { useEffect, useState } from "react";

function UseEffectComponnet() {
  // useState hook
  const [count, setCount] = useState(0);

  // Simple useEffect hook
  // Uncomment below code. Open Cosole and check this arrow function is running on rendering of component as well as on updation of state
                  
            /* useEffect( () => {
                  console.log("Hello I am Effect = "+count)
                }) */

  // Conditional useEffect hook
  // Uncomment below code. Open Cosole and check this arrow function is running only once when component rendering first time = Mounting Method of Class Component
            
            /* useEffect(() => {
                  console.log("Hello I am Effect = " + count);
                }, []); */



  // Conditional useEffect hook
  // Uncomment below code. Open Cosole and check this arrow function is running only when count is updated    = Updating Method of Class Component.
  // Update Name to confirm that nothing changed on console as useEffect only dedicated to count state
  // Creating a new state name to show the difference

                           const [name,setName] = useState("Sheeraz");
                                    
                                      /* useEffect(() => {
                                            console.log("Hello I am Effect = " + count);
                                          }, [count]); */


  // Rendering Components
  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>Update State</button>
      <button onClick={() => setName("Ali")}>Update Name</button>
    </div>
  );
}

export default UseEffectComponnet;
