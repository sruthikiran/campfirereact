import React, { Component } from 'react';
import Header from './components/Header'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Landing = () => (
  <div style={landing_style} className="">
    <h1>Welcome to Campfire!</h1>
    <p className="flow-text"> One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.

    To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference! </p>
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
            <Landing />
            <div style={wrapper_style}>
              <button onClick={this.handleToggleLogin}  style={linkedin_btn}className="waves-effect btn-large"><i className="fab fa-linkedin"></i>  Login with LinkedIn</button>
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

const landing_style={
  backgroundColor: '#BDBDBD',
  textAlign: 'center'
}

const wrapper_style = {
  textAlign: 'center'
}

const linkedin_btn={
  backgroundColor: '#0077b5',
  fontSize: '20px',
}

export default App;
