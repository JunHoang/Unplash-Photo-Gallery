import React, { useContext } from "react";
import { Redirect, Route } from 'react-router-dom';
import AppContext from '../../store/AppContext'

export default function AuthRoute(props) {
    const [isLoggedIn, user] = useContext(AppContext);

    if(isLoggedIn) return <Route {...props}/>;

    return <Redirect to="/login"/>
}
