import { Link } from "react-router-dom";

function Navbar() {
  return (
      <header className=" bg-slate-700 text-dark py-3 md:py-4 dark:bg-slate-900">
        <div className="max-w-7xl  my-3 mx-[130px] flex items-cente flex-col md:flex-row items-center md:justify-between">
          <a
            className="font-medium text-3xl mb-5 md:text-4xl md:font-bold md:mb-0"
            href="/"
          >
            MyKitchen
          </a>
          <nav className="text-center md:text-left md:flex items-center gap-4">
            <p className="mb-4 md:mb-0 md:font-medium">Welcome, Abdulloh</p>
            <div className="flex gap-4">
              <Link to='/logout' className="px-2 py-1 rounded-md text-white bg-orange-400 md:px-3 md:py-2">
                Logout
              </Link>
              <a
                className="px-2 py-1 rounded-md text-white bg-emerald-400 md:px-3 md:py-2"
                href="/"
              >
                Create
              </a>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Navbar;
