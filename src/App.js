import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Bookcard from './components/organisms/BookCard';
import theme from '../src/utils/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogContentPage from './pages/BookContentPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlogContentPage />
    </ThemeProvider>
  );
}

export default App;
