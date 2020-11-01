import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import AdminHome from './Components/AdminHome'
import WorkersUpdate from './Components/WorkersUpdate';
import MaterialsProcured from './Components/MaterialsProcured'
import ClientHome from './Components/ClientHome'
import UpdateImages from './Components/UpdateImages'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 

    };
  }

  render(){
    return(
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <div className="route_about">
            <Route path='/about' exact>
              <About />
            </Route>
          </div>
          <div className="route_home">
            <Route path='/' exact >
              <Home />
            </Route>
          </div>
          <div className="route_contact">
            <Route path='/contacts' exact >
              <Contact />
            </Route>
          </div>
          <div className="route_signup">
            <Route path='/signup' exact >
              <SignUp />
            </Route>
          </div>
          <div className="route_login">
            <Route path='/login' exact >
              <Login />
            </Route>
          </div>
          <div className="route_adminlogin">
            <Route path='/admin-login' exact >
              <AdminLogin />
            </Route>
          </div>
          <div className="route_adminlogin">
            <Route path='/admin-home' exact >
              <AdminHome />
            </Route>
          </div>
          <div className="route_workersUpdate">
            <Route path='/admin-home/workers-update' exact >
              <WorkersUpdate />
            </Route>
          </div>
          <div className="route_materialsProcured">
            <Route path='/admin-home/materials-procured' exact >
              <MaterialsProcured />
            </Route>
          </div>
          <div className="route_clientName">
            <Route path='/client-home/:clientid' exact >
              <ClientHome />
            </Route>
          </div>
          <div className="route_clientImages">
            <Route path='/admin-home/update-images' exact >
              <UpdateImages />
            </Route>
          </div>
        </div>
        <div className="tower_img">
          
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;