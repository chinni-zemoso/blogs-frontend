import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from '../src/utils/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogContentPage from './pages/BookContentPage';
import PrimarySearchAppBar from './components/molecules/AppBar/PrimarySearchAppBar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar/>
      <BlogContentPage />
    </ThemeProvider>
  );
}

export default App;
