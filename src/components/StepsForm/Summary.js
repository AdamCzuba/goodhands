import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";



function Summary() {
  const {type, setType} = useContext(FormContext);
  return (
    <div className="steps_form">
      <div className="form_wrapper">
        <div className="form_header">
          <h3>Podsumowanie twojej darowizny</h3>
        </div>
        <div className="form_body">
          {type}
        </div>
      </div>
    </div>
  )
}

export default Summary