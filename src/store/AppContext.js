import React from "react";

const AppContext = React.createContext({ LoggedIn: false, user: {} });

export default AppContext;