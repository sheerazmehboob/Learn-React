import React from 'react'
import Style from '../components/ModuleStyling.module.css'
import Style2 from '../components/ModuleStyling2.module.css'

function ModuleStyling() {

    {/* Css Modlues are used to resolve naming conflicts in traditional css files we cant use classes with
    same names but we can do it using css module files. Css Modules are locally declared while stylesheet 
    are declared globally. */}

  return (
    <div>
      <h1 className={Style.font}>Sherry, Here</h1>
      <h1 className={Style2.font}>Sherry, Here</h1>

    </div>
  )
}

export default ModuleStyling
