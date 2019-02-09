import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

export class LinkedInLogin extends Component {
  state = { redirectToReferrer: false };

  // login = () => {
  //   fakeAuth.authenticate(() => {
  //     this.setState({ redirectToReferrer: true });
  //   });
  // };

  render() {
    // let { from } = this.props.location.state || { from: { pathname: "/" } };
    // let { redirectToReferrer } = this.state;
    //
    // if (redirectToReferrer) return <Redirect to={from} />;
    //
    return (
      <div>
      </div>
    )
  }
}


// class Login extends React.Component {
//
//
//
//
//   render() {
//     let { from } = this.props.location.state || { from: { pathname: "/" } };
//     let { redirectToReferrer } = this.state;
//
//     if (redirectToReferrer) return <Redirect to={from} />;
//
//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }



export default LinkedInLogin
