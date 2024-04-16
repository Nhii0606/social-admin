import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import account from './pages/account';
import  accountEmployee from './pages/accountEmployee';
import form from './pages/form';
import CreateCompany from './pages/CreateCompany';
import  company from './pages/company';
import createProfile  from './pages/createProfile';
import forgotPassword from './pages/forgotPassword';
import profile from './pages/profile';
import project from './pages/project';
import Login from './pages/Login';


// const AuthRoute = ({component: Component, ...rest}) => {
//   <Route {...rest} render={props => {
//     true ? (<Component {...props} />) : 
//     (<Redirect to={{pathName: '/login'}} />)
//   }}/>
// }

class App extends Component {

  render() {
    return (
      true ? (
        <div className="container-fluid position-relative d-flex p-0">
          <Nav />
          <main role="main">
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/account' component={account} />
            {/* <Route path='/morris-chart' component={MorrisChart} /> */}
            <Route exact path='/accountEmployee' component={accountEmployee} />
            <Route exact path='/form' component={form} />
            <Route exact path='/CreateCompany' component={CreateCompany} />
            <Route exact path='/company' component={company} />
            <Route exact path='/createProfile' component={createProfile} />
            <Route exact path='/profile' component={profile} />
            <Route exact path='/project' component={project} />
            {/* default route */}
            <Route exact path='/' component={Dashboard} />
          </main>
        </div>
      ) : <Login />
    );
  }
}

export default App;
