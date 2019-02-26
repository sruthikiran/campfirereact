import React, { Component } from 'react'
import ProfileLeft from './ProfileLeft'
import ProfileRight from './ProfileRight'


export class Profile extends Component {
  render() {
    return (
      <div className="row valign-wrapper">
          <div className="col s3" style={leftstyle}>
            <ProfileLeft />
          </div>
          <div className="col s8" style={rightstyle}>
            <ProfileRight />
          </div>
      </div>
    )
  }
}


const leftstyle = {
  listStyle : 'none',
  marginRight: '2em',
  // textAlign : 'center'
}

const rightstyle = {
  outline : '2px solid white',
  // textAlign : 'center'
}

export default Profile
