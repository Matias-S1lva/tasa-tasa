import React from 'react'
import "../Nav.css";

const Nav = () => {
    return (
        <div className="Nav">
      <nav>
        <div className="titulo">
          <img src="/icons/icon_menu.svg" alt="menu" className="menu" />
          <i className="fa-solid fa-mug-saucer"></i>
          <h1>TASA TASA</h1>
        </div>
        <div className="navbar-left">
          <ul>
            <li>
              <a href="/">Todo</a>
            </li>
            <li>
              <a href="/">Alquilar</a>
            </li>
            <li>
              <a href="/">Comprar</a>
            </li>

            <li>
              <a href="/">Servicios</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li>
              <a href="publicar">PUBLICAR</a>
            </li>
            <li className="navbar-email">matias@example.com</li>
            <li className="navbar-shopping-cart">
              <i className="fa-solid fa-bell"></i>
              <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    );
}

export  {Nav};