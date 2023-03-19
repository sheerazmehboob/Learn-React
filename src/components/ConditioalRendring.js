import React from 'react'
import C1forConditionalRendering from './C1forConditionalRendering';
import C2forConditionalRendering from './C2forConditionalRendering';

function ConditioalRendring() {
    //-------------- Using If-Else Statements-----------------
// const name="Sherry";
// if(name=="Sherry"){
//     return <C1forConditionalRendering/>
// }
// else{
//     return <C2forConditionalRendering/>
// }

//------------- 2nd method------------
// const name="Sherry";
// let data;
// if(name=="Sherry"){
//     data= <C1forConditionalRendering/>
// }
// else{
//     data= <C2forConditionalRendering/>
// }

const name="Sherry";
return(
<>
    {/* Logical && Operator */}
    {/* This Condition render if true else you will get nothing */}
    {/* {name=="Sherry" && <C1forConditionalRendering/>} */}


    {/* Ternary Operator */}
    {name=="Sherry"? <C1forConditionalRendering/> : <C2forConditionalRendering/>}

</>
);

}

export default ConditioalRendring
