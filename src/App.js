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
      <Router>
        <PopularPostAppBar />
        <Switch>
          {/* <Route path="/hot" component={() => <BlogContentPage />} /> */}
          <Route path="/" exact render={() => <BlogContentPage />} />
          <Route path="/hot" exact render={() => <BlogContentPage />} />
          <Route path="/new" exact render={() => <div>Yet to design</div>} />
          <Route path="/top" exact render={() => <div>Yet to design</div>} />
          <Route path="/rising" exact render={() => <div>Yet to design</div>} />
        </Switch>
      </Router>
      {/* <PrimarySearchAppBar /> */}
      {/* <BlogContentPage /> */}
    </ThemeProvider>
  );
}

export default App;
