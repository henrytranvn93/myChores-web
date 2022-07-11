import React from 'react';
import Navheader from './components/Navheader/Navheader';

import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#FFB81C'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>  
      <Navheader/>
      <h1 style={{display: "flex", justifyContent: "center"}}>My Chores Web</h1>
    </ThemeProvider>
  );
}

export default App;
