import React from "react";
import './App.css';

import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";

  /* React Router gives the app the feel of desktop apps so you're switching b/w pages without talking to server
    thus the page doesn't reload
    */


function App() {
  return (
    <Router>
      <div className="app">
       
        {/*One can go from one page to another page without refreshing using SWITCH 
            or we can set diffrent routes for our page
        */}
        <Switch>
           <Route path = "/checkout">
           <Header />
            <Checkout />
           </Route>
           <Route path="/login">
             <h1>Login Page !!</h1>
            
             
           </Route>
           <Route path="/">
             <Header />
              <Home />


            </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
