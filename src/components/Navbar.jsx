import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'; 
import "../styles/navbar.scss";
import logo from "../../public/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userRoles, setUserRoles] = useState([]); 
  const [userId, setUserId] = useState(null); 
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      const user = JSON.parse(userCookie);
      setIsLoggedIn(!!user.email); 
      setUserRoles(user.roles || []); 
      setUserId(user.id); 
    }
  }, []);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    Cookies.remove('user'); 
    setIsLoggedIn(false);
    window.location.href = '/'; 
  };

  const hasRole = (role) => userRoles.includes(role);

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          <img src={logo} alt="Logo" />
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""}`}
        >
          <ul>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/Tarif">Tarifs</Link>
            </li>
            <li>
              <Link to="/about">à propos de nos</Link>
            </li>
            {isLoggedIn && hasRole('ROLE_USER') && (
              <li>
                <Link to={`/profile/${userId}`}>Profil</Link>
              </li>
            )}
            {isLoggedIn && hasRole('ROLE_ADMIN') && (
              <li>
                <Link to="/create">Créer un Event</Link>
              </li>
            )}
            {isLoggedIn ? (
              <button className="btn" onClick={handleLogout}>Déconnexion</button>
            ) : (
              <>
                <Link to="/register">
                  <button className="btn">Inscription</button>
                </Link>
                <Link to="/login">
                  <button className="btn btn__login">Se connecter</button>
                </Link>
              </>
            )}
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
