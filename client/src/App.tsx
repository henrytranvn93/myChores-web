import React from 'react';
import Navheader from './components/Navheader/Navheader';
import Dashboard from './components/Dashboard/Dashboard';

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
      <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
