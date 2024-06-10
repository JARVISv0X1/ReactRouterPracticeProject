import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              Events Page
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/events/new"}
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
            >
              New Event Page
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
