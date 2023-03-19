import React, { useState } from "react";

function UseStateWithObjects()
{
    const obj= {
        name:'sherry',
        age:20,
        height:5.10,
        isMarried:false
    }
    const [person,setPerson] = useState(obj);

    let changeState = () => 
    {

        //----------------------- For Changing a specific Variable----------------------
        setPerson(previousState => {
            return{
                ...previousState,
                name:'Dawood'
            }
        });

    // --------------- Updating Complete Object ------------------
    //  setPerson({
    //     name:'talal',
    //     age:22,
    //     height:5.8,
    //     isMarried:true
    //  })
    }

return(
    <>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <h2>{person.height}</h2>
        <h2>{person.isMarried.toString()}</h2>
        <button onClick={changeState}>Update</button>
    </>
)
}

export default UseStateWithObjects