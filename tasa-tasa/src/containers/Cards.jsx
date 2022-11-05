import React from 'react'
import '../Cards.css'
import iconBathroom from "../assets/bathroom_icon.svg";
import iconCama from "../assets/cama_icon.svg";
import iconUbicacion from "../assets/ubicacion_icon.svg";

const Cards = ({price,location,url,bathrooms,rooms}) => {
    return (
        <div className="product-card">
          <img
            src={url}
            alt="product"
          />
          <div className="product-info">
            <div>
              <p>{price}</p>
              <div className="container-ubicacion">
                <img src={iconUbicacion} alt="" />
                <p>{location}</p>
              </div>
            </div>
            <div className="figuras">
              <img src={iconBathroom} alt="baños" />
              <p>{bathrooms}</p>
              <img src={iconCama} alt="habitaciones" />
              <p>{rooms}</p>
            </div>
          </div>
        </div>
    );
}

export  {Cards};