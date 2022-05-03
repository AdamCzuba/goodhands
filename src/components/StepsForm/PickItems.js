import React, { useState } from "react";


function PickItems() {

  const [type, setType] = useState('');

  const onChangeRadio = (e) => {
    setType(e.target.value);
    console.log(e.target.value);

  }
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
            <input type="radio" name='goods' value='ubrania, które nadają się do ponownego użycia' />ubrania, które nadają się do ponownego użycia
            <input type="radio" name='goods' value='ubrania, do wyrzucenia' />ubrania, do wyrzucenia
            <input type="radio" name='goods' value='zabawki' />zabawki
            <input type="radio" name='goods' value='książki' />książki
            <input type="radio" name='goods' value='inne' />inne
          </div>

        </div>
      </div>
    </div>
  )
}

export default PickItems;