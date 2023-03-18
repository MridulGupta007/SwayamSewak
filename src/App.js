import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import { buyTicketOperation, endGameOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";

const App = () => {
 


  return(
    <div className="h-100">
      <Navbar />
    </div>
  )

  
};

export default App;
