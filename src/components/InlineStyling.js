import React from "react";

function InlineStyling() {
  let headingStyle = {
    color: "red",
    textAlign: "center",
    backgroundColor: "Yellow",
  };
  let headingStyle2 = {
    fontSize: "40px",
    fotnFamily: "cooper"
  };

  return (
    <div>
      {/* <h1 style={{color:"red",textAlign:"center",backgroundColor:"Yellow"}}>Sherry</h1> */}
      {/* <h1 style={headingStyle}>Sherry</h1> */}
      <h1 style={{...headingStyle, ...headingStyle2}}>Sherry</h1>
    </div>
  );
}

export default InlineStyling;
