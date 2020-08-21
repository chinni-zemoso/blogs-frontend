import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from '../src/utils/theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';
import BlogContentPage from './pages/BookContentPage';
import PrimarySearchAppBar from './components/molecules/AppBar/PrimarySearchAppBar'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./App.css";

import IconButton from "@material-ui/core/IconButton";



function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline >
        <BlogContentPage />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
