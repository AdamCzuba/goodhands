import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as Scroll } from "react-scroll";

export default function HomeSimpleSteps() {
  return (
    <>
      <section className="simplesteps_title">
        <h1 className="primary_title">Wystarczą 4 proste kroki</h1>
        <div className="decoration"></div>
      </section>
      <section className="simplesteps_content">
        <div className="steps_guide_wrapper">
          <div className="step_icon icon1"></div>
          <div className="step_move">Wybierz rzeczy</div>
          <div className="step_line"></div>
          <div className="step_description">ubrania, zabawki, sprzęt i inne</div>
        </div>
        <div className="steps_guide_wrapper">
          <div className="step_icon icon2"></div>
          <div className="step_move">Spakuj je</div>
          <div className="step_line"></div>
          <div className="step_description">skorzystaj z worków na śmieci</div>
        </div>
        <div className="steps_guide_wrapper">
          <div className="step_icon icon3"></div>
          <div className="step_move">Zdecyduj komu<br/> chcesz pomóc</div>
          <div className="step_line"></div>
          <div className="step_description">wybierz zaufane miejsce</div>
        </div>
        <div className="steps_guide_wrapper">
          <div className="step_icon icon4"></div>
          <div className="step_move">Zamów kuriera</div>
          <div className="step_line"></div>
          <div className="step_description">kurier przyjedzie w dogodnym terminie</div>
        </div>
      </section>
    <div className="simplesteps_button">
    <Link className='button' to="/">ODDAJ<br/> RZECZY</Link>
    </div>
    </>
  )
}
