import React from "react";
import { Link } from "react-router-dom";

function Card2() {
  return (
    <div className="site-container">
      <div className="card lg:card-side bg-base-100 w-[1100px] shadow-xl">
        <figure>
        <div className="carousel carousel-center w-[500px] p-4 space-x-4 bg-neutral rounded-box">
      
        <div className="carousel-item">
          <img  src="https://img.povar.ru/mobile/d3/9d/fc/40/somsa_samosa-4902.jpg" className="rounded-box w-[400px] h-[350px]" />
        </div> 
        <div className="carousel-item">
          <img  src="https://makepedia.uz/wp-content/uploads/2018/06/samsa.jpg" className="rounded-box w-[400px] h-[350px]" />
        </div> 
        <div className="carousel-item">
          <img  src="https://touruz.com/ru/blog/wp-content/uploads/2021/07/%D1%81%D0%B0%D0%BC%D1%81%D0%B0.jpg" className="rounded-box w-[400px] h-[350px]" />
        </div>
      </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <Link to='/' className="btn glass text-white">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
