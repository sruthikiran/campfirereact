import React, { Component } from 'react';
import Header from './components/Header'
import {Modal, Button, Icon} from 'react-materialize'
import Logo from './img/fire.png'
import LinkedInPage from './components/Landing/LinkedInPage'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Landing = () => (
  <div>
    <nav className="indigo">
      <div  className="nav-wrapper container">
        <Link to="/"  style={logoStyle} className="brand-logo"> Campfire  <img style={logo_img_style} src={Logo}/></Link>
      </div>
    </nav>
    <div style={landing_style} className="container">
      <div style={white_box}>
        <h4> Circle up on your tech career! </h4>
        <p className="flow-text"> You've graduated from bootcamp! Congrats! Now it's time to take the next step in your career - finding a job. With Campfire, you can circle up with your fellow cohort-mates as well as bootcamp alumni to network and help lift each other up. Find your cohort, and your next job, right here on Campfire!
        </p>
        <p className="flow-text">Use your LinkedIn account to get started.</p>
        
      </div>
    </div>
  </div>
)


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      landing : true
    }

    this.handleToggleLogin = this.handleToggleLogin.bind(this)
  }

  handleToggleLogin(){
    console.log("Toggle Status", this.state.landing )
    this.setState({
      landing : false
    })

  }

  render() {
    return (
      <Router>
        {this.state.landing === true
        ? <div style={app_style} className="App">
            <div>
              <nav className="indigo">
                <div  className="nav-wrapper container">
                  <Link to="/"  style={logoStyle} className="brand-logo"> Campfire  <img style={logo_img_style} src={Logo}/></Link>
                </div>
              </nav>
              <div style={landing_style} className="container">
                <div style={white_box}>
                  <h4> Circle up on your tech career! </h4>
                  <p className="flow-text"> You've graduated from bootcamp! Congrats! Now it's time to take the next step in your career - finding a job. With Campfire, you can circle up with your fellow cohort-mates as well as bootcamp alumni to network and help lift each other up. Find your cohort, and your next job, right here on Campfire!</p>
                  <p className="flow-text">Use your LinkedIn account to get started.</p>
                  <div style={wrapper_style}>
                    <button onClick={this.handleToggleLogin}  style={linkedin_btn}className="waves-effect btn-large"><i className="fab fa-linkedin"></i>  Login with LinkedIn</button>
                    <LinkedInPage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div style={app_style} className="App">
            <Header />
          </div>
        }
      </Router>
      )}
}

const app_style={
  backgroundColor: '#BDBDBD',
  minHeight : '100vh',
}

const white_box = {
  backgroundColor:'white',
  borderRadius: '5px',
  padding: '2em',
  margin: '1em',
}

const landing_style={
  backgroundColor: '#BDBDBD',
  textAlign: 'center'
}

const wrapper_style = {
  textAlign: 'center'
}

const linkedin_btn = {
  backgroundColor: '#0077b5',
  fontSize: '20px',
  textTransform: 'none',
}


const logoStyle = {
  fontFamily: 'Pacifico, cursive',
}

const logo_img_style = {
  height: '1em',
  width: '1em',
}

export default App;
