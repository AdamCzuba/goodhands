import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";


function PickItems() {

  // const [type, setType] = useState('');
  const {type, setType} = useContext(FormContext);

  const onChangeRadio = (e) => {
    setType(e.target.value);
    console.log(e.target.value);

  }

  const inputs = [
    'ubrania, które nadają się do ponownego użycia',
    'ubrania, do wyrzucenia',
    'zabawki',
    'książki',
    'inne'
  ]


  return (
    <div className="steps_form">
      <div className="form_tooltip">
        <h3>Ważne!</h3>
        <span>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</span>
      </div>
      <div className="form_progressbar">Krok 1/4</div>
      <div className="form_wrapper">
        <div className="form_header">
          <h3>Zaznacz co chcesz oddać:</h3>
        </div>
        <div className="form_body">
          <div className="radio_picker" onChange={onChangeRadio}>
            {inputs.map(el => (
              <div key={el}>
                <label>{el}</label>
                <input type="radio" name='goods' value={el} checked={type === el} />
                </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default PickItems;