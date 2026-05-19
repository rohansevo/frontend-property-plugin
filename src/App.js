import React from "react";
import Home from "./pages/Home";
import SingleProperty from "./components/SingleProperty";

function App() {
 const path = window.location.pathname;

  // Single Property Page
  if (path.includes("property-details")) {
    return <SingleProperty />;
  }
  // Home Page
  return <Home />;
}

export default App;