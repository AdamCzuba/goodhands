import React, { useState } from "react";

function OrderDelivery() {

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  }
  const onChangeCity = (e) => {
    setCity(e.target.value);
  }

  const onChangePostCode = (e) => {
    setPostCode(e.target.value);
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  }

  return (
    <div className="steps_form">
      <div className="form_tooltip">
        <h3>Ważne!</h3>
        <span>Podaj adres oraz termin odbioru rzeczy.</span>
      </div>
      <div className="form_progressbar">Krok 4/4</div>
      <div className="form_wrapper">
        <div className="form_header">
          <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h3>
        </div>
        <div className="form_body">
            <div className='form_adress'>
              <h4>Adres odbioru:</h4>
              <label>Ulica
                <input onChange={onChangeStreet} type="text"></input>
              </label>
              <label>Miasto
                <input onChange={onChangeCity} type="text"></input>
              </label>
              <label> Kod pocztowy
              <input onChange={onChangePostCode} type="text" pattern="^\d{2}-\d{3}$"/>
              </label>
              <label>
                Numer telefonu
                <input onChange={onChangePhone} type="tel"></input>
              </label>
            </div>
            <div className='form_pickup_time'>
            <h4>Termin odbioru:</h4>
            <label>
              Data
              <input type="date"></input>
            </label>
            <label>
              Godzina
            <input type="time"/>
            </label>
            <label>
              Uwagi dla kuriera
              <textarea></textarea>
            </label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDelivery