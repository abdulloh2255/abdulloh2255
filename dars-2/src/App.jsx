import React from "react";

function App() {
  return (
    <div>
      <div className="container w-[635px] items-center justify-between ">
        <div className="box1 bg-white">
          <h1 className="box1-taxt1 text-cyan-500 text-3xl ">Join our community</h1>
          <h3 className="box1-taxt2 text-2xl text-lime-400">30-day, hassle-free money back guarantee</h3>
          <p className="box1-taxt3 text-[18px] text-gray-400">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="box1-2 flex items-center justify-center">
          <div className="box2 w-[318px] bg-teal-500">
            <div className="box2">
              <h2 className="box2-taxt1 text-xl text-white">Monthly Subscription</h2>
              <h3 className="box2-taxt2 text-4xl text-white flex items-center gap-[11px]">
                $29 <span className="box2-span  text-xl opacity-50">per month</span>
              </h3>
              <p className="box2-taxt3 text-white">Full access for less than $1 a day</p>
              <button className="box2-btn rounded-md w-[237px] h-[48px]  bg-lime-400 ">
                <span className="box2-btn-taxt text-xl text-white">Sign Up</span>
              </button>
            </div>
          </div>
          <div className="box3 opacity-95 w-[340px] h-[274px] block  bg-teal-400">
            <h4 className="box3-taxt1  text-xl text-white">Why Us</h4>
            <p className="box3-taxt2 text-white text-[14px]">
              Tutorials by industry experts Peer & expert code review Coding
              exercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
