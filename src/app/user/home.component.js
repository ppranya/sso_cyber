import { Box } from "@mui/system";
import TableComponent from "app/user/table/table.component";
import FooterComponent from "app/layout/footer";
import HeaderComponent from "app/layout/header";
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import CardComponent from "./card/card.component";

const HomeComponent = (props) => {
  const match = useRouteMatch();
  const menuList = [
    {
      link: "/user-table",
      name: "User Table",
      children: [],
    },
    {
      link: "/user-json",
      name: "User Json",
    },
  ];

  return (
    <>
      <HeaderComponent menuList={menuList} />
      <Box className="body-container">
        <Switch>
          <Route
            path={match.path}
            exact
            render={() => {
              return (
                <Redirect
                  to="/user-table"
                />
              );
            }}
          />
          <Route path={`/user-table`} exact component={TableComponent} />
          <Route path={`/user-json`} component={CardComponent} />
        </Switch>
      </Box>
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
