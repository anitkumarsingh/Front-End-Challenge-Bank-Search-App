import React from 'react';
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import AppRoute from './routes/AppRoute';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const AppContainer =() =>{
  return (
    <Router>
         <Route component={NavBar}/>
         <Switch>
           <Route component={AppRoute}/>
         </Switch>
         <Route component={Footer}/>
    </Router>
  );
}

const App = ()=>{
  return(
    <Router>
      <Route component={AppContainer}/>
    </Router>
  )
}

export default App;