import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
} from "@mui/material";
import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  const [value, setValue] = React.useState("recents");
  const isMobile = useMediaQuery("(max-width: 500px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navbar" style={{ textAlign: "-webkit-center" }}>
      <BottomNavigation
        sx={{ width: isMobile ? 100 : 500 }}
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: "transparent" }}
      >
        <BottomNavigationAction icon="Home" component={Link} to="/" />
        <BottomNavigationAction icon="Todo" component={Link} to="/todo" />
        <BottomNavigationAction icon="View" component={Link} to="/view" />
      </BottomNavigation>
    </div>
  );
}
