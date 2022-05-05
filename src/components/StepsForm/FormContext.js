import React, { useState } from "react";
import { createContext } from "react";


export const FormContext = createContext();


export function FormProvider({ children }) {

    const [type, setType] = useState('');
    const [bags, setBags] = useState('');
    const [localization, setLocalization] = useState('');
    const [checkbox, setCheckbox] = useState(true);
    const [helpGroups, setHelpGroups] = useState([]);
    const [localizationSpecific, setLocalizationSpecific] = useState('');



    const globals = {
        type,
        setType,
        bags,
        setBags,
        localization,
        setLocalization,
        checkbox,
        setCheckbox,
        helpGroups,
        setHelpGroups,
        localizationSpecific,
        setLocalizationSpecific
    }

    return (
        <FormContext.Provider value={globals}>
            {children}
        </FormContext.Provider>
    )
}