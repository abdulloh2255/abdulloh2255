
function Login() {


  return (
    <div className="forms py-[100px]">
      <div>
        <h2 className=" text-center text-white text-3xl">Login</h2>
        <form
          className=" items-center flex flex-col gap-5"
        >
          <label className="block">
            <span className="block   mb-3">Email:</span>
            <input className="py-2 px-8 text" type="email" />
          </label>
          <label className="block">
            <span className="block  mb-3">Password:</span>
            <input className="py-2 px-8 text "  type="password" />
          </label>
          <div className="">
            <button className="  mx-[25px]  btn text-xl text-white  btn-ghost hover:glass  textarea-bordered">
              Login
            </button>
            <a
              className=" my-7 mx-[25px]   btn text-xl text-white btn-ghost hover:glass  textarea-bordered"
              href="signup"
            >
              Signup
            </a>
          </div>
        </form>
        <p className="px-[650px] py-[px]">If you don't have account, please</p>
      </div>
    </div>
  );
}

export default Login;
