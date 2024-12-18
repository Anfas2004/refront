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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; // Optional if using React Router
import './topebar.css';

const TopebarWithSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topbar">
      {/* Topbar Section */}
      <div className="topbarwrapper">
        <div className="topleft">
          <Toolbar
            sx={{
              justifyContent: "flex-start", // Align items to the left
              padding: 0, // Remove any extra padding that might cause alignment issues
            }}
          >
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <span className="logo">RETRADE</span>
          </Toolbar>
        </div>

        <div className="topright">
          <Button
            variant="contained"
            color="error"
            href="/admin"
            sx={{
              textTransform: "none",
              padding: "5px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Log Out
          </Button>
        </div>
      </div>

      {/* Sidebar Section */}
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
    </div>
  );
};

export default TopebarWithSidebar;
