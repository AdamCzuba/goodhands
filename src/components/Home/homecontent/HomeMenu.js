import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Link as LinkScroll, animateScroll as Scroll } from "react-scroll";
import { useAuth } from "../../Authentication/authcontext";

export default function Menus() {

  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  console.log(currentUser)

  return (
    <div className="menus">
      <div className="login_menu">
        {currentUser === null ? <>
          <Link className='login_menu_element' to="/login">Zaloguj</Link>
          <Link className='login_menu_element' to="/signup">Załóż konto</Link>
        </> : <>
          <span className="hello_user">Cześć {currentUser.email}!</span>
          <Link className='login_menu_element' to="/giveaway">Oddaj rzeczy</Link>
          <span className="login_menu_element" onClick={handleLogout}>Wyloguj</span>

        </>
        }

      </div>
      <div className="main_menu">
        <Link className='main_menu_element' to="/">Start</Link>
        <LinkScroll className='main_menu_element' to="login_menu">O co chodzi?</LinkScroll>
        <LinkScroll className='main_menu_element' to="login_menu">O nas</LinkScroll>
        <LinkScroll className='main_menu_element' to="login_menu">Fundacja i organizacje</LinkScroll>
        <LinkScroll className='main_menu_element' to="login_menu">Kontakt</LinkScroll>
      </div>
    </div>
  )

}