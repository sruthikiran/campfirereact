import React, { Component } from 'react'
import MyEditor from "../MyEditor"
import {Collapsible, CollapsibleItem, Row} from 'react-materialize'

const allMessages = [
  {
    from: 'Andrew Skinner',
    msg_id : '1',
    subject : "Do you know React?",
    message : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    read_status : "false",
    sent_at: "a day ago"
  },
  {
    from: 'Andrew Skinner',
    msg_id : '2',
    subject : "Do you know Python?",
    message : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    read_status : "true",
    sent_at: "a day ago"
  },
  {
    from: 'Anthony Dinh',
    msg_id : '3',
    subject : "Do you know React?",
    message : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    read_status : "true",
    sent_at: "a day ago"
  },
  {
    from: 'Sruthi Suryadevara',
    msg_id : '4',
    subject : "Are you coming in today?",
    message : "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    read_status : "false",
    sent_at: "a day ago"
  }

]

export class Inbox extends Component {

  setIcon(read_status){
    if (read_status.read_status === "true") {
      return <i className="material-icons">drafts</i>
    }else{
      return <i className="material-icons">email</i>
    }
  }

  header(from, subject, sent_at, read_status){
    return(
      <Row>
        <p className="col s1">{this.setIcon({read_status})}</p>
        <p className="col s3">From: {from}</p>
        <p className="col s4">Subject: {subject}</p>
        <p className="col s2">{sent_at}</p>
      </Row>
    )

  }

  render() {
    return (
      <div>
        <Collapsible popout >
          {allMessages.map(({from, msg_id, subject, message, read_status, sent_at}) => (
          <CollapsibleItem key={msg_id} className="white" header={this.header(from, subject, sent_at, read_status)}>
            {message}
          </CollapsibleItem>
        ))}
        </Collapsible>
      </div>
    )
  }
}


const editorStyle={
  height: '250px'
}

export default Inbox
