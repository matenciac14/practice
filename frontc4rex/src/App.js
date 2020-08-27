import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header'
import Djs from './components/Djs'
import Ubications from './components/Ubications'
import Favorites from './components/Favorites'
import NewGuests from './components/NewGuests'

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (

      <Router>
        <Provider store={store}
        >
          <Header/>
        <Switch>
          <Route exact path="/" component ={Djs} />
          <Route exact path="/favorites" component ={Favorites} />
          <Route exact path="/guests" component ={Ubications} />  
          <Route exact path="/newguest" component ={NewGuests} />          
        </Switch>
        </Provider>
        
      </Router>
  );
}

export default App;
