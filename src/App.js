import React from "react";
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
//importing Global Styles
import Globalstyle from "./components/GlobalStyle";
function App() {
  return (
    <div className="App">
      <Nav />
      <Globalstyle />
      <AboutMe />
    </div>
  );
}

export default App;
