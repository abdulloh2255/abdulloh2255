import React, { useRef } from "react";

import useSignup from "../hooks/useSignup";

function Signup() {
  const { signup, error, user } = useSignup();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );

    displayName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="forms py-[100px]">
      <h2 className="px-[730px] text-3xl">Signup</h2>
      <form className=" items-center flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="block mb-3">Name:</span>
          <input ref={displayName} type="text" />
        </label>
        <label  className="block">
          <span className="block mb-3">Email:</span>
          <input ref={email} type="email" />
        </label>
        <label  className="block">
          <span className="block mb-3">Password:</span>
          <input ref={password} type="password" />
        </label>
        <button  className=" mx-[5px]  btn text-xl  btn-ghost hover:text-gray-400 textarea-bordered">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Signup;
