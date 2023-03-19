import React from 'react'

function ClickFunction(props) {

    function Hello() {
        alert("hello World");
    }

    //Argumented Event Handler
    const HelloFunction = (name) => {
        alert("Hello "+name)
    }

  return (
    <div>
      <input type="button" value="Click" onClick={Hello} />
      <input type="button" value="Argumented Click" onClick={ () => HelloFunction(props.name)} />
    </div>
  )
}

export default ClickFunction
