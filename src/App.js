import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import routes from "./utils/routes";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        console.log(user);
      } else {
        setUser({});
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            if (route.path === "/login") {
              if (isLoggedIn) return <Redirect to="/" />;
            }

            if (route.path === "/gallery") {
              return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }

            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
