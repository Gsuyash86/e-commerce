import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";
import logo from "../../assests/logo.png";
import useStyles from "./style";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItem }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        className={CallMissedSharp.appBar}
        color="inherit"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="30px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Item"
                color="inherit"
              >
                <Badge badgeContent={totalItem} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
