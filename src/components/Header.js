import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
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
    <nav className="py-5 bg-gray-900 text-white text-xl">
      <ul className="flex justify-between px-10">
        <span className="flex">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/gallery">Gallery</Link>
          </li>
        </span>
        <li>
          {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}