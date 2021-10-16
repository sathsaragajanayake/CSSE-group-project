import React  from 'react';
import '../src/styles/app.css';

import Home from './components/Home.js'
import Login from './components/Login'
//sanduni
import AddBusDetails from './components/AddBusShedule';
import GetBusDetails from './components/GetBusDetails';  
import EditBusDetails from './components/EditBusShedule';
import LogOut from './components/logout';
import PassangerDetails from './components/passangerCal';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddBus from './components/AddBus';

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
       <Route exact path="/"><Login/></Route>
          <Route exact path="/Home"><Home/></Route>
    {/* //Sanduni */}
          <Route path="/AddBus"><AddBusDetails/></Route>
          <Route exact path="/edit/:id" component={EditBusDetails}/>
          <Route path="/ViewBus"><GetBusDetails/></Route>
          <Route path="/Add"><AddBus/></Route>
          <Route path="/logout" component={LogOut}/>
          <Route path="/passangerData" component={PassangerDetails}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
