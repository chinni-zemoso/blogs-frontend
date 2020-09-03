import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HotPosts from "./pages/HotPosts";
import NewPosts from "./pages/NewPosts";
import TopPosts from "./pages/TopPosts";
import RisingPosts from "./pages/RisingPosts";
import PopularPostAppBar from "./components/organisms/PopularPostAppBar";
import "./App.css";
import theme from "../src/utils/theme";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  //loggedin user
  const loggedinUser = {
    id: 1,
    name: "Kahaleel",
    email: "kmackegg0@go.com",
    image: "https://robohash.org/velautemdolores.jpg?size=40x40&set=set1",
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PopularPostAppBar image={loggedinUser.image} />
        <Switch>
          <Route path="/hot" exact render={() => <HotPosts loggedinUser={loggedinUser} />} />
          <Route path="/new" exact render={() => <NewPosts loggedinUser={loggedinUser} />} />
          <Route path="/top" exact render={() => <TopPosts loggedinUser={loggedinUser} />} />
          <Route path="/rising" exact render={() => <RisingPosts loggedinUser={loggedinUser} />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
