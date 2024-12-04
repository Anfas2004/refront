import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; // Optional if using React Router

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top-left Icon Button */}
      <Toolbar sx={{ justifyContent: "flex-start" }}>
        <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>


      {/* Collapsible Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ pl: 2 }}>
              Main
            </Typography>
          </ListItem>
          <ListItem button component={Link} to="/home" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ pl: 2 }}>
              Registrations
            </Typography>
          </ListItem>
          <ListItem button component={Link} to="/category" onClick={toggleDrawer}>
            <ListItemText primary="Category" />
          </ListItem>
          <ListItem button component={Link} to="/product" onClick={toggleDrawer}>
            <ListItemText primary="Product" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ pl: 2 }}>
              View
            </Typography>
          </ListItem>
          <ListItem button component={Link} to="/cview" onClick={toggleDrawer}>
            <ListItemText primary="Category View" />
          </ListItem>
          <ListItem button component={Link} to="/pview" onClick={toggleDrawer}>
            <ListItemText primary="Product View" />
          </ListItem>
          <ListItem button component={Link} to="/uview" onClick={toggleDrawer}>
            <ListItemText primary="User View" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
