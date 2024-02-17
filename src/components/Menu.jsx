import React from "react";
import style from "../assets/css/style.css"
import { menu } from "../Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>


              <img src={item.img} alt="" />
              <h3>tasty and healty</h3>
              <div className="price">
                $15.99 <span>20.99</span>
              </div>
              <button className="bubbly-button">Click me!</button>






            </div>
            
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;


var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
  }