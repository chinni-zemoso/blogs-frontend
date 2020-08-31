import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HotPosts from './pages/HotPosts';
import NewPosts from './pages/NewPosts';
import TopPosts from './pages/TopPosts';
import RisingPosts from './pages/RisingPosts';
import PopularPostAppBar from './components/organisms/PopularPostAppBar'
import './App.css';
import theme from '../src/utils/theme';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PopularPostAppBar />
        <Switch>
          <Route path="/hot" exact render={() => <HotPosts />} />
          <Route path="/new" exact render={() => <NewPosts />} />
          <Route path="/top" exact render={() => <TopPosts />} />
          <Route path="/rising" exact render={() => <RisingPosts />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
