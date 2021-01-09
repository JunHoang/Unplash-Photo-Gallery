import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../config/firebase";
import AppContext from "../store/AppContext";

export default function Header() {
  const [isLoggedIn, user] = useContext(AppContext);
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        history.replace("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <nav className="py-5 bg-gray-900 text-white text-xl flex justify-between">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <NavLink exact activeClassName="text-blue-200 font-bold" to="/">
              Home
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink activeClassName="text-blue-200 font-bold" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink activeClassName="text-blue-200 font-bold" to="/tensorflow">
              Tensorflow
            </NavLink>
          </li>
        </span>
      </ul>
      <ul className="flex justify-between px-10">
        <li className="ml-5">
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink activeClassName="text-blue-200 font-bold" to="/login">
              Login
            </NavLink>
          )}
        </li>
        {!isLoggedIn && (
          <li className="ml-5">
            <NavLink activeClassName="text-blue-200 font-bold" to="/signup">
              SignUp
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
