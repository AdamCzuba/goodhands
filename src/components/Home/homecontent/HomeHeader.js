import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as Scroll } from "react-scroll";
import Menus from './HomeMenu';


export default function HomeHeader() {
  return (
    <section className="header_container">
      <div className="hero_img"></div>
      <div className="header_wrapper">
        <Menus/>
        <div className="hero_wrapper">
          <h1 className="primary_title">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
          <div className="decoration"></div>
          <div className="start_helping">
          <Link className='button' to="/">ODDAJ<br/> RZECZY</Link>
          <Link className='button' to="/">ZORGANIZUJ ZBIÓRKĘ</Link>
          </div>
        </div>
      </div>

    </section>
  )
}
