import { FaCartPlus, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="main-container pt-12 md:pt-20 lg:pt-32">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div>
            <ul className="menu bg-yellow-500 rounded-box w-56">
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="cart">
                  <FaCartPlus />
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
