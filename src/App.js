import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";
import Login from "./components/login/login"
import Register from "./components/register/register"
import Banner from "./Banner";
import Baby from "./Baby";
import ForHim from "./ForHim";
import ForHer from "./ForHer";
import Christmas from "./Christmas";
import Wedding from "./Wedding";
const promise = loadStripe(
  "pk_test_51M8blLSDJZiSXRCBWuC11TGZineRSeyKEeITQWl6rhejlAh1xzm9hn8diY0olJQqHUVemPNL9EvnFAJpyMjKD51W00z1Rcd9a2"
 
);

function App() {
  const [{}, dispatch] = useStateValue();

  const [ user, setLoginUser] = useState({})

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/baby">
            <Header />
            <Baby />
            <Footer />
          </Route>
          <Route path = "/forhim">
            <Header />
            <ForHim />
            <Footer />
          </Route>
          <Route path = "/forher">
            <Header />
            <ForHer />
            <Footer />
          </Route>
          <Route path = "/christmas">
            <Header />
            <Christmas />
            <Footer />
          </Route>
          <Route path = "/wedding">
            <Header />
            <Wedding />
            <Footer />
          </Route>
   <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
           </Route>
<Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Banner />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

