import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, getDocs } from 'firebase/firestore';

export default function HomeHelpGuide() {

  const [fundations, setFundations] = useState([]);
  const fundationsCollectionRef = collection(db, "fundations");

  useEffect(() => {

    const getFundations = async () => {
      const data = await getDocs(fundationsCollectionRef);
      setFundations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getFundations();
  }, []);

  return (
    <>
      <section className="helpguide_section">
        <div className="primary_title"> Komu pomagamy?</div>
        <div className="decoration"></div>
        <div className="small_buttons_wrapper">
          <span className="small_button">Fundacjom</span>
          <span className="small_button">Organizacjom pozarządowym</span>
          <span className="small_button">Lokalnym zbiórkom</span>
        </div>
        <div className="fundations_container">
          <div className="fundation_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
          <div className="fundation_list_wrapper">
            {fundations.map((fundation) => {
              return (
                <div className="fundation_element">
                  <div className="fundation_namemission">
                    <div className="fundation_name">{fundation.name}</div>
                    <div className="fundation_mission">Cel i misja: {fundation.mission}</div>
                  </div>
                  <div className="fundation_goods">{fundation.goods}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


    </>
  )
}
