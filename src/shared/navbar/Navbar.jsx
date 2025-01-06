import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const navPages = (
    <>
      <li>
        <NavLink to="/" className="uppercase font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" className="uppercase font-semibold">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="uppercase font-semibold">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-menu" className="uppercase font-semibold">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-shop" className="uppercase font-semibold">
          Our Shop
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-100/70 z-10 fixed left-0 right-0">
        <div className="navbar main-container">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navPages}
              </ul>
            </div>
            <a className="text-xl font-bold uppercase">Bistro Boss</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navPages}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div>
                {" "}
                <p>{user.email}</p>
                <button onClick={() => signOutUser()} className="btn">
                  Log Out
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn">
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
