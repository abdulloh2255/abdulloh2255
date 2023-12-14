import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogaut from "../hooks/useLogaut";

function Navbar() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogaut();
  return (
    <div className=" text-white">
      <div className="navbar  px-[100px] py-[30px] bg-base-100">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl hover:glass">My Kitchen</Link>
        </div>
        <div className="flex-none">
          <ul className=" menu-horizontal px-1 gap-[20px]">
            <p className="name text-center my-[15px]">Hello {user.displayName}</p>

            <button className="btn glass uppercase text-white" onClick={logout}>Logout</button>
            <Link to='/create' className="btn glass uppercase text-white "> Create</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
