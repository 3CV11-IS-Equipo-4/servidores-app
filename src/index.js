import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Views/Home';
import Page404 from './Views/Page404';
import Login from './Views/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './Views/Profile';
import DI from './Views/Dictator';
import OP from './Views/PartsOfficer';
import JA from './Views/AreaBoss';
import Admin from './Views/Admin';
import { Redirect } from 'react-router-dom';
import SolicitudDetail from './Views/SolicitudDetail';
import User from './Views/User';

const Logout = () => {
  window.localStorage.removeItem('token');
  return <Redirect to="/"/>;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/perfil">
          <Profile/>
        </Route>
        <Route exact path="/oficialiaPartes">
          <OP/>
        </Route>
        <Route exact path="/jefeArea">
          <JA/>
        </Route>
        <Route exact path="/dictaminador">
          <DI/>
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
        <Route exact path="/solicitud-esoecifica">
          <SolicitudDetail/>
        </Route>
        <Route exact path="/solicitud/:id" component={SolicitudDetail}/>
        <Route exact path="/user/:id" component={User}/>
        <Route exact path="/logout" component={Logout}/>
        <Route path="*">
          <Page404/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
