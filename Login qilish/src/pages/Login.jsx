import { Link } from "react-router-dom";
import { useRef } from "react";
import useLogin from "../hooks/useLogin";

function Login() {
  const { login, user, error } = useLogin();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);

    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="forms py-[100px]">
      <div>
        {" "}
        <h2 className="px-[730px] text-3xl">Login</h2>
        <form
          className=" items-center flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="block mb-3">Email:</span>
            <input className="py-2 px-3" ref={email} type="email" />
          </label>
          <label className="block">
            <span className="block mb-3">Password:</span>
            <input ref={password} type="password" />
          </label>
          <div className="">
            <button className=" mx-[5px]  btn text-xl  btn-ghost hover:text-gray-400 textarea-bordered">
              Login
            </button>
            <a
              className=" my-7 mx-[5px]   btn text-xl  btn-ghost hover:text-gray-400 textarea-bordered"
              href="signup"
            >
              Signup
            </a>
          </div>
        </form>
        <p className="px-[650px] py-[px]">
          If you don't have account, please
        </p>
      </div>
    </div>
  );
}

export default Login;
