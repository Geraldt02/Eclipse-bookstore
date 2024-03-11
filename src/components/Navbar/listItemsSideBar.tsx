import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { ListItemButton, Typography } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <DashboardOutlined style={{ paddingLeft: "10%", fontSize: "20px" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="subtitle1">Dashboard</Typography>}
      />
    </ListItemButton>

    <ListItemButton component={Link} to="/BookList">
      <ListItemIcon>
        <BookOutlined style={{ paddingLeft: "10%", fontSize: "20px" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="subtitle1">Sold List</Typography>}
      />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Information
    </ListSubheader>

    <ListItemButton component={Link} to="/AboutUs">
      <ListItemIcon>
        <InfoCircleOutlined style={{ paddingLeft: "10%", fontSize: "20px" }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography variant="subtitle1">About Us</Typography>}
      />
    </ListItemButton>
  </React.Fragment>
);
