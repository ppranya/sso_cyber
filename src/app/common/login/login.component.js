import { Box, Container } from "@mui/material";
import configs from "configs";
import React from "react";
import GoogleButton from "react-google-button";
import "./login.component.css";
import Logo from "../../../images/logo.png";

const LoginComponent = (props) => {
  return (
    <div className="login-style">
      <Container>
        <Box className="login-form">
          <div className="logo">
              <img src={Logo} alt="" />
          </div>
          <GoogleButton
            onClick={() => {
              window.location.href = configs.APIUrl + "/employers/auth/google";
            }}
          ></GoogleButton>
        </Box>
      </Container>
    </div>
  );
};
export default LoginComponent;
