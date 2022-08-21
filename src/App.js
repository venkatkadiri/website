import React from "react";
import AboutMe from "./pages/AboutMe";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/Contactme";
import Nav from "./components/Nav";
import MovieDetalis from "./pages/MovieDetalis";
import Error from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";
//importing Global Styles
import Globalstyle from "./components/GlobalStyle";
//importing router
import { Route, Switch, useLocation } from "react-router-dom";
//importing animations
import { AnimatePresence } from "framer-motion";
import Burger from "./components/Burger";
import Resize from "./components/Resize";
function App() {
  const location = useLocation();
     const [height,width] = Resize();
     console.log(width);
  return (
    <div className="App">
      {width >= 430? (<Nav/>):(<Burger/>)}
      <Globalstyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutMe />
          </Route>
          <Route path="/projects" exact>
            <MyProjects />
          </Route>
          <Route path="/projects/:id">
            <MovieDetalis />
          </Route>
          <Route path="/blog" exact>
            <BlogPage />
          </Route>
          <Route path="/contact" exact>
            <ContactMe />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
