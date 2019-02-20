import React, { Component } from 'react'
import Image from "../../img/dude.png"
import Placeholder from "../../img/placeholder.png"
import {Modal, Button, Icon} from 'react-materialize'
import MyEditor from "../MyEditor"

export class NetworkCard extends Component {
  render() {
    const fullName = this.props.alum.firstName+" "+ this.props.alum.lastName;
    return (
      <div className="card horizontal">
        <div className="card-image">
          <img style={cardImg} src={Image} alt={Placeholder}/>
        </div>
        <div className="card-stacked">
          <div style={cardText} className="card-content">
          <span className="card-title"> {this.props.alum.firstName} {this.props.alum.lastName} </span>
          <p>Role : {this.props.alum.role} </p>
          <p>Company : {this.props.alum.company} </p>
          <p>Location: {this.props.alum.location} </p>
          <p>URL : {this.props.alum.url} </p>
          </div>
          <div style={btnRt}>
            <Modal header={fullName} trigger={
            <Button style={custBtn} floating medium lighten-1 className='teal'  icon='email' />}>
            <p>Send a message here!</p>
            <MyEditor />
            </Modal>
            <Modal header={fullName} trigger={
              <Button style={custBtn} floating medium className='teal' icon='menu' />}>
              <p>Profile Info here</p>
              <div className="row valign-wrapper">
                <div className="col s3">
                  <img className="circle responsive-img" src={Image} alt={Placeholder} />
                </div>

                <div className="col s8">
                  <p> Role : React FrontEnd Engineer</p>
                  <p> Company : Coding Dojo</p>
                  <p> Location : San Jose, CA, USA</p>
                  <p> Role : React FrontEnd Engineer</p>
                  <p> Role : React FrontEnd Engineer</p>
                  <p> Role : React FrontEnd Engineer</p>
                  <p> Role : React FrontEnd Engineer</p>
                  <p> Role : React FrontEnd Engineer</p>
                  <p> Role : React FrontEnd Engineer</p>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

const btnRt = {
  textAlign: 'right',
  marginTop: '-75px',

}
const custBtn = {
  display: 'inline-block'
}

const cardImg = {
  height: '190px',
  width: '150px',
}

const cardText = {
  display: 'inline-block',
  height: '100%',
  width: '75%',
  whiteSpace: 'nowrap',
  // overflow: 'hidden',
  // textOverflow: 'ellipsis'
}


export default NetworkCard
