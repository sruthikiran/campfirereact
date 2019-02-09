import React, { Component } from 'react'

export class NetworkSearch extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper purple darken-3 text-white">
          <form>
            <div className="input-field">
            <input id="search" type="search" required />
            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NetworkSearch
