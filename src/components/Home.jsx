import React from "react";
// import style from "../assets/css/style.css";

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

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh <span>food in the </span>morning
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>
         
          <button className="bubbly-button">Click me!</button>
          
        </div>
      </section>
    </>
  );
};


export default Home;
