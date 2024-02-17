import React from "react";
import { blog } from "../Data";
import style from "../assets/css/style.css"

const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2021</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                  dicta.
                </p>
                <button className="bubbly-button">Click me!</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
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