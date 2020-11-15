import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
function App() {
  const [{}, disptach] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        disptach({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        disptach({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            <Route path="/payment">
              <Header/>
              <Payment/>
            </Route>
            <Route path="/">
              <Header/>
              <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
