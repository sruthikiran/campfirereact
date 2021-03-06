import React, { Component } from 'react'
import Image from "../../img/dude.png"
import Placeholder from "../../img/placeholder.png"
import {Button, Icon,Input} from 'react-materialize'
import './ProfileLeft.css';


const Modal = ({ handleClose,show ,handleClickOutside}) => {
  console.log("IN MODAL", show)
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form>
          <div className="row valign-wrapper">
              <div className="col s6">
                <div className="row valign-wrapper">
                  <div className="col s6">
                    <img className="square responsive-img imgStyle" src={Image} alt={Placeholder}/>
                  </div>
                  <div className= "col s6">
                      <input id="imageFileId" type='file' hidden/>
                      <Button  className="indigo buttonStyle" >Change<Icon right>photo</Icon></Button>
                      <Button  className="indigo buttonStyle" >Remove<Icon right>delete_outline</Icon></Button>
                  </div>
                </div>
                <Input s={12} label="First Name" />
                <Input s={12} label="Last Name" />
                <Input s={12} label="Title" />
                <Input s={12} label="Company" />
                <Input s={12} label="Location" />
              </div>

              <div className="col s6">
                <Input s={12}label="Biographical Information" rows="4" type='textarea'/>
                <Input s={6} label="Cohort" />
                <Input s={6} label="Campus" />
                <Input s={12} label="Email" />
                <Input s={12} label="Mobile Number - optional" />
                <Input s={12} label="LinkedIn - optional" />
                <Input s={12} label="Github - optional" />
                <Input s={12} label="Website - optional" />
              </div>
          </div>
          <div className="saveCloseButton" >
            <Button type="submit" name="action" className="indigo saveCloseButton" >Save</Button>
            <Button onClick={handleClose} className="indigo closeButton" >Cancel</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export class ProfileLeft extends Component {
  constructor(props){
    super(props)
    this.state = {
      show : false
    }

    this.showModal= this.showModal.bind(this)
    // this.uploadImage= this.uploadImage.bind(this)
    this.closeModal= this.closeModal.bind(this)
    this.onClickOutside = this.onClickOutside(this)
  }

  closeModal(){
    this.setState({
      show : false
    })
  }

  showModal(){
    console.log("SHOW MODAL", this.state.show)
    this.setState({
      show : true
    })
  }

  // uploadImage(){
  //
  // }

  onClickOutside = (event) => {
    console.log("CLICK OUTSIDE" ,event.target)
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  render() {
    return (
        <React.Fragment>
          <img className="square responsive-img imgStyle"  src={Image} alt={Placeholder}/>
          <li><span className="important"> Dane Olsen  </span> </li>
          <li><span > Front-End Developer </span> </li>
          <Modal
            show={this.state.show}
            handleClose={this.closeModal}
            uploadImage={this.uploadImage}
            handleClickOutside={this.onClickOutside}
            >
          </Modal>

          <Button onClick={this.showModal} className="indigo buttonStyle">Edit Profile<Icon right>edit</Icon></Button>

          <li> <i className="fas fa-map-marker-alt"> </i>  San Jose, CA</li>
          <li> <i className="far fa-envelope"></i> dane@dane.com</li>
          <li> <i className="fas fa-link"></i> www.github.com/dane</li>
          <li> <i className="far fa-clock"></i> Active since 1/1/2019</li>
        </React.Fragment>

    )
  }
}

export default ProfileLeft
