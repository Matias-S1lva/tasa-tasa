import React from "react";
import "../Section.css";

const Section = (props) => {
 
  
  
  return (
    <section className="main-container">
      <div className="cards-container">
       
      {props.children}
      </div>
    </section>
  );
};

export  {Section};
