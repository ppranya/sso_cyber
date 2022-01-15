import React from "react";
import { Route } from "react-router";
import UserRoute from "./routes/userRoute";

const App = () => {   
  return (
    <>
      <Route path={"/"} component={UserRoute} />
    </>
  );
};

export default App;
