import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Orders from "./Orders";
import {useEffect} from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Slider from "./components/slider/Slider";
const promise =loadStripe("pk_test_51LInmmSIaOn7iQ78GI4kx4ezRqNArOlcDFqdQPu42OWQbqLWLqzWBZvEV8bGJXBa5klQLdGLjz4iz5n44wcjn0po00LZ3YK87m");

//Changes for Route syntax due to version compatability
function App() {

    const [{}, dispatch] = useStateValue();

    useEffect(() => {
      // will only run once when the app component loads...
  
      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS >>> ", authUser);
  
        if (authUser) {
          // the user just logged in / the user was logged in
  
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);

    return ( < div className = "app" >
        <Router>
        <Routes>
        <Route exact path = '/' 
        element = {
            <>
            <Header / >
              <hr></hr>
            <Slider/>
            <Home / >
                
            </>
        }/>
        <Route exact path="/login"
         element = {
            <>
            <Login / >
            </>
         }/>
         <Route exact path="/checkout"
         element = {
            <>
            <Header />
            <Checkout / >
            </>
         }/>
         <Route exact path="/payment"
         element = {
            <>
            <Header />
            <Elements stripe ={promise}>
            <Payment />
            </Elements>
            </>
         }/>
        <Route exact path="/orders"
         element = {
            <>
            <Header/>
            <Orders />
            </>
         }/>
        
        </Routes >
         </Router > 
         </div > );

         
    }
    export default App;