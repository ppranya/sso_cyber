import React, { useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import storageUtil from "app/common/utils/storageUtil";
import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
} from "@mui/material";
import Logo from "../../images/logo.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css";
import SessionTimeout from "app/session-timeout/session-timeout";

const HeaderComponent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const login_info = storageUtil.getItem("user");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const onLogout = () => {
    storageUtil.removeItem("user");
    history.push("/login");
  };

  const routeMatch = useRouteMatch(props.menuList?.map((x) => x.link));
  const currentTab = routeMatch?.path;

  return (
    <>
      <header className="site-header">
        <SessionTimeout isAuthenticated={login_info ? true : false} logOut={onLogout} />
        <Box
          className="sticky-header"
          sx={{
            borderColor: "primary.main",
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
          }}
        >
          <div className="main-bar">
            <Container sx={{ display: "flex", alignItems: "center" }}>
              <Box className="logo-header">
                <Link to={"./"}>
                  <img src={Logo} className="logo" alt="" />
                </Link>
              </Box>
              <div className="header-nav">
                <Tabs value={currentTab}>
                  {props.menuList?.map((menu, i) => {
                    return (
                      <Tab
                        key={i}
                        sx={{ fontSize: "15px" }}
                        label={menu.name}
                        value={menu.link}
                        to={menu.link}
                        component={Link}
                        disabled={!!menu.disabled}
                      />
                    );
                  })}
                </Tabs>
              </div>
              <Box sx={{ width: "100%", textAlign: "right" }}>
                <IconButton
                  id="userName"
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  {`${login_info?.first_name} ${login_info?.last_name}`} <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Container>
          </div>
        </Box>
      </header>
    </>
  );
};

export default HeaderComponent;
