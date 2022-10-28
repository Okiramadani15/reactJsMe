import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Geser from "./components/Geser";
import Grid from "./components/Grid";
import Kartu from "./components/Kartu";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Geser />
      <div>
        <Grid />
      </div>
      <div>
        <Kartu />
      </div>
    </div>
  );
}

export default App;
