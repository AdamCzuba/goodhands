import React, { useContext, useState } from "react";
import { FormContext } from "./FormContext";

function PickFundation() {

  // const [localization, setLocalization] = useState('');
  // const [checkbox, setCheckbox] = useState(true);
  // const [helpGroups, setHelpGroups] = useState([]);
  // const [localizationSpecific, setLocalizationSpecific] = useState('');

  const {localization} = useContext(FormContext);
  const {setLocalization} = useContext(FormContext);
  const {checkbox} = useContext(FormContext);
  const {setCheckbox} = useContext(FormContext);
  const {helpGroups} = useContext(FormContext);
  const {setHelpGroups} = useContext(FormContext);
  const {localizationSpecific} = useContext(FormContext);
  const {setLocalizationSpecific} = useContext(FormContext);



  const onChangeOption = (e) => {
    setLocalization(e.target.value);
    console.log(e.target.value);
  }

  const onChangeLocSpec = (e) => {
    setLocalizationSpecific(e.target.value);
  }

  function handleHelpGroups(e) {
    const checkboxValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setCheckbox({
      ...checkbox,
      [e.target.name]: checkboxValue
    });
    console.log(checkboxValue);

    if ( checkboxValue === true) {
      setHelpGroups([...helpGroups, e.target.value])
      // console.log(helpGroups)
    } else {
      setHelpGroups(helpGroups.filter(group => group !== e.target.value))
      // console.log(helpGroups)
    }
    console.log(helpGroups)
  }



  console.log(helpGroups)
  return (
    <div className="steps_form">
      <div className="form_tooltip">
        <h3>Ważne!</h3>
        <span>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</span>
      </div>
      <div className="form_progressbar">Krok 3/4</div>
      <div className="form_wrapper">
        <div className="form_header">
          <h3>Lokalizacja:</h3>
        </div>
        <div className="form_body">
          <select onChange={onChangeOption}>
            <option value="0">-- Wybierz --</option>
            <option value="Poznań">Poznań</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Kraków">Kraków</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Katowice">Katowice</option>
          </select>
          <div onChange={handleHelpGroups}>
            <h4>Komu chcesz pomóc?</h4>
            <label>
              <input type="checkbox" name='toWho' value='dzieciom' />dzieciom
            </label>
            <label>
              <input type="checkbox" name='toWho' value='samotnym matkom' />samotnym matkom
            </label>
            <label>
              <input type="checkbox" name='toWho' value='bezdomnym' />bezdomnym
            </label>
            <label>
              <input type="checkbox" name='toWho' value='niepełnosprawnym' />niepełnosprawnym
            </label>
            <label>
              <input type="checkbox" name='toWho' value='osobom starszym' />osobom starszym
            </label>
            <label>
              <h5>Wpisz nazwę konkretnej organizacji(opconalne)</h5>
              <input onChange={onChangeLocSpec} type='text' />
            </label>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PickFundation