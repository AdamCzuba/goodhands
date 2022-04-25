import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as Scroll } from "react-scroll";


export default function HomeHeader() {
  return (
    <section className="header_container">
      <div className="hero_img"></div>
      <div className="header_wrapper">
        <div className="menus">
          <div className="login_menu">
            <Link className='login_menu_element' to="/">Zaloguj</Link>
            <Link className='login_menu_element' to="/">Załóż konto</Link>
          </div>
          <div className="main_menu">
            <LinkScroll className='main_menu_element' to="login_menu">Start</LinkScroll>
            <LinkScroll className='main_menu_element' to="login_menu">O co chodzi?</LinkScroll>
            <LinkScroll className='main_menu_element' to="login_menu">O nas</LinkScroll>
            <LinkScroll className='main_menu_element' to="login_menu">Fundacja i organizacje</LinkScroll>
            <LinkScroll className='main_menu_element' to="login_menu">Kontakt</LinkScroll>
          </div>
        </div>
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
