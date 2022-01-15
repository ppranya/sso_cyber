import React from "react";
import queryString from "query-string";
import { Redirect } from "react-router";
import storageUtil from "../utils/storageUtil";

const GoogleAuth = (props) => {
  const search = props.location.search;
  const params = queryString.parse(search);
  console.log(`params`, params);
  storageUtil.setItem("user", params);

  return <Redirect to="/" />;
};

export default GoogleAuth;
