import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";

function PackItems() {

  // const [bags, setBags] = useState('');
  const {setBags} = useContext(FormContext);

  const onChangeOption = (e) => {
    setBags(e.target.value);
    console.log(e.target.value);

  }

  return (
    <div className="steps_form">
      <div className="form_tooltip">
        <h3>Ważne!</h3>
        <span>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</span>
      </div>
      <div className="form_progressbar">Krok 2/4</div>
      <div className="form_wrapper">
        <div className="form_header">
          <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
        </div>
        <div className="form_body">
          <select onChange={onChangeOption}>
          <option value="0">-- Wybierz --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default PackItems;