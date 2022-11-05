import React from "react";
import home from "./home.jpg";
import logo from "./logo.jpg";
import "../Home.css";
import { Search } from "./Search";

const Home = ({ searchCasa, setSearchCasa }) => {
  return (
    <>
      <div className="container-portada">
        <div className="portada">
          <div className="background-dark"></div>
          <Search searchCasa={searchCasa} setSearchCasa={setSearchCasa} />
        </div>
      </div>

      <div style={{ display: "block", position: "relative" }}>
        <div className="presentacion">
          <div className="presentacion-logo">
            <img src={logo} alt="" />
          </div>
          <div></div>

          <p>
            <span>❝</span>
            Es un portal donde el objetivo es facilitar la compra del alquiler,
            la venta y la adquisición de inmuebles o bienes inmobiliarios.
            <br />
            Para ello la plataforma brinda la seguridad y la facilidad hacia
            quienes quieren vender o conseguir un inmueble de forma sencilla y
            fácil
            <span>❞</span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="container-destacada">
          <div className="container-destacada-img">
            <div className="imagen-1"></div>
            <div className="imagen-2"></div>
          </div>
          <div className="container-destacada-vermas">
            <div className="imagen-3"></div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3> Destacadas</h3>
            <p>
              Inmuebles extraordinarios dirigidos y supervisados por Corredores
              Públicos matriculados, especializados en la compra y venta de
              propiedades.
            </p>
            <button>
              <span className="label">Ver mas</span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };
