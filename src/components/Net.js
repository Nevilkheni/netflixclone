// src/components/Net.js
import React from 'react';
import "./Net.css"

const Net = (props) => {
  return (
    
    <div className="App">
      <div className="cards">
        <div className="card">
          <img src={props.src} alt='mypic' className="card_img" /> 
          <div className="card_info">
            <span className="card_category">{props.title}</span> 
            <h3 className="card_title">{props.name}</h3> 
            <a href={props.link} target='_blank' rel='noopener noreferrer'>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      {/* <input type="text" placeholder="Type something..." /> */}
    </div>
  );
};

export default Net;
