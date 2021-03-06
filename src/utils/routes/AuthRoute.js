import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../store/AppContext";
import AnimatedRoute from "./AnimatedRoute";

export default function AuthRoute({ children, ...rest }) {
  const [isLoggedIn, user] = useContext(AppContext);

  if (isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return (
    <AnimatedRoute>
      <Redirect to="/login" />
    </AnimatedRoute>
  );
}
