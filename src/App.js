import React from "react";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/Contactme";
import Nav from "./components/Nav";
import MovieDetalis from "./pages/MovieDetalis";
//importing Global Styles
import Globalstyle from "./components/GlobalStyle";
//importing router
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Globalstyle />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/projects" exact>
          <MyProjects />
        </Route>
        <Route path="/projects/:id">
          <MovieDetalis />
        </Route>
        <Route path="/contact" exact>
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
