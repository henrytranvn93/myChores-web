import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@mui/material";

type Props = {};

export default function Navheader({}: Props) {


    const [navVal, setNavVal] = useState<String>("One");

    const handleChange = (e: React.SyntheticEvent, newValue: String) => {
        setNavVal(newValue);
    }

  return (
    <AppBar position="static">
      <Tabs value={navVal} onChange={handleChange} textColor="secondary">
        <Tab label="Page One" value="One"/>
        <Tab label="Page Two" value="Two"/>
        <Tab label="Page Three" value="Three"/>
      </Tabs>
    </AppBar>
  );
}
