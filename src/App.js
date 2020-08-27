import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogContentPage from './pages/BookContentPage';
import PopularPostAppBar from './components/organisms/PopularPostAppBar'
import './App.css';
import theme from '../src/utils/theme';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PopularPostAppBar />
      <Router>
        <Switch>
          <Route path="/" render={() => <BlogContentPage />} />
          <Route path="/home" render={() => <BlogContentPage />} />
        </Switch>
      </Router>
      {/* <PrimarySearchAppBar /> */}
      {/* <BlogContentPage /> */}
    </ThemeProvider>
  );
}

export default App;
