import React, { Component } from 'react'

export class NetworkSearch extends Component {
  render() {
    return (
      <div className="nav-wrapper text-white">
        <form>
            <input id="search" type="search" required />
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
        </form>
      </div>
    )
  }
}

export default NetworkSearch
