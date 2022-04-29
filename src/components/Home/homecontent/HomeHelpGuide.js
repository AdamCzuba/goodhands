import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, getDocs } from 'firebase/firestore';
import Pagination from "./Pagination";
//react-spring do animacji wyswietlana komponentow

export default function HomeHelpGuide() {

  //pobieranie db z firestora
  const [currentFundation, setCurrentFundation] = useState('fundations')
  const [fundations, setFundations] = useState([]);

  // const [fundations, setFundations] = useState([]);
  // const fundationsCollectionRef = collection(db, "fundations");

  // const [organizations, setOrganizations] = useState([]);
  // const organizationsCollectionRef = collection(db, "organizations");

  // const [locals, setLocals] = useState([]);
  // const localsCollectionRef = collection(db, "locals");


  useEffect(() => {
    const getFundations = async () => {
      const fundationsCollectionRef = collection(db, currentFundation);
      const data = await getDocs(fundationsCollectionRef);
      setFundations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getFundations();

  }, [currentFundation]);

  // wyswietlanie organizacji

  const changeFundation = name => () => {
    setCurrentFundation(name)
  }

  //paginacja
  const [currentPage, setCurrentPage] = useState(1);
  const [fundsPerPage] = useState(3);

  const indexOfLastFund = currentPage * fundsPerPage;
  const indexOfFirstFund = indexOfLastFund - fundsPerPage;
  const currentFunds = fundations.slice(indexOfFirstFund, indexOfLastFund);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <section className="helpguide_section">
        <div className="primary_title"> Komu pomagamy?</div>
        <div className="decoration"></div>
        <div className="small_buttons_wrapper">
          <span className="small_button" onClick={changeFundation('fundations')}>Fundacjom</span>
          <span className="small_button" onClick={changeFundation('organizations')}>Organizacjom pozarządowym</span>
          <span className="small_button" onClick={changeFundation('locals')}>Lokalnym zbiórkom</span>
        </div>
        {fundations ? <div className="fundations_container">
          <div className="fundation_text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
          <div className="fundation_list_wrapper">
            {currentFunds.map((fundation) => {
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
            <Pagination postsPerPage={fundsPerPage} totalPosts={fundations.length} paginate={paginate} />
          </div>
        </div> : null}
      </section>


    </>
  )
}
