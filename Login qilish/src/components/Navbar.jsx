import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogaut from "../hooks/useLogaut";
function Navbar() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogaut();
  return (


    <div>
    <div className=" site-container navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">Mercedes Benz</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li>
          <NavLink className="pages text-white hover:text-gray-400 textarea-bordered" to="/about">Compony</NavLink>
        </li>
        <li>
        <NavLink className="pages text-white hover:text-gray-400 textarea-bordered" to="/about">Sevise</NavLink>
      </li>
        <li>
 
        <NavLink className="pages text-white hover:text-gray-400 textarea-bordered" to="/contact">Pictures</NavLink>

      </li>
        </ul>
      </div>
      <div className="navbar-end">
      <p className="name">Hello {user.displayName}</p>
        <a className=" btn text-xl  btn-ghost hover:text-gray-400 textarea-bordered " onClick={logout}>Button</a>
        
      </div>
    </div>
  </div>
  );
}

export default Navbar;
