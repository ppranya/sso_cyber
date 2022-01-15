import GoogleAuth from "app/common/login/google-auth.component";
import LoginComponent from "app/common/login/login.component";
import { isLoggedIn } from "app/common/utils/loginUtil";
import HomeComponent from "app/user/home.component";
import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

const UserRoute = () => {
  return (
    <BrowserRouter basename="">
      <div className="page-wraper">
        <Switch>
          <Route path="/google-auth" component={GoogleAuth} />
          <Route path="/login" component={LoginComponent} />
          <Route
            path={"/"}
            render={() => {
              return isLoggedIn() ? <HomeComponent /> : <LoginComponent />;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default UserRoute;
