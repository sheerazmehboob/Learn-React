// ------------------- Method-1

// import React, { useState } from 'react'

// function UseStateComponent() {
//     const array = useState("sherry");
//   return (
//     <div>
//       <h1>{array[0]}</h1>
//       <button onClick={() => {array[1]("malik")}}>Update</button>
//     </div>
//   )
// }

// export default UseStateComponent









// ------------------- Method-2

// import React, { useState } from 'react'

// function UseStateComponent() {
//     const array = useState("sherry");

//     const changeState = () => {
//         let tbText = document.getElementById('tb').value;
//         array[1](tbText)
//     }

//   return (
//     <div>
//       <h1>{array[0]}</h1>
//       <input type="text" name="" id="tb" />
//       <button onClick={changeState}>Update</button>
//     </div>
//   )
// }

// export default UseStateComponent









// ------------------- Method-3

import React, { useState } from 'react'

function UseStateComponent() {
    const [Name,setName] = useState("sherry");

    const changeState = () => {
        let tbText = document.getElementById('tb').value;
        setName(tbText)
    }

  return (
    <div>
      <h1>{Name}</h1>
      <input type="text" name="" id="tb" />
      <button onClick={changeState}>Update</button>
    </div>
  )
}

export default UseStateComponent