import React, { useState } from "react";
import Menus from '../Home/homecontent/HomeMenu';
import { useNavigate, Link } from 'react-router-dom';
import OrderDelivery from "./OrderDelivery";
import PackItems from "./PackItems";
import PickFundation from './PickFundation';
import PickItems from './PickItems';
import Summary from './Summary';
import { FormContext } from "./FormContext";

export default function HomeHeader() {
    //global values
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
    //local values
    const [page, setPage] = useState(0);

    const PageDisplay = () => {


        switch (page) {
            case 0:
                return <PickItems />;
            case 1:
                return <PackItems />;
            case 2:
                return <PickFundation />;
            case 3:
                return <OrderDelivery />;
            case 4:
                return <Summary />;
            default:
                return <PickItems />;
        }

    }



    return (
        <>
            <section className="header_container">
                <div className="form_hero_img"></div>
                <div className="header_wrapper">
                    <Menus />
                    <div className="hero_wrapper">
                        <h1 className="primary_title">Oddaj rzeczy, których już nie chcesz<br />POTRZEBUJĄCYM</h1>
                        <div className="decoration"></div>
                        <div className="start_helping">
                            <Link className='button' to="/">ODDAJ<br /> RZECZY</Link>
                            <Link className='button' to="/">ZORGANIZUJ ZBIÓRKĘ</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="form_container">
                <FormContext.Provider value={globals}>
                    <PageDisplay />
                    <div className="form_footer">
                        {page === 0 ? null : <buton
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }} className="form_button">Wstecz</buton>}
                        {page < 4 ? <buton
                            onClick={() => {
                                setPage((currPage) => currPage + 1);
                            }} className="form_button">Dalej</buton> : null}
                        {page === 4 ? <buton
                            className="form_button">Potwierdzam</buton> : null}
                    </div>
                </FormContext.Provider>

            </section>
        </>

    )
}