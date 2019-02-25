import React, { Component } from 'react'
import MyEditor from "../MyEditor"
import {Collapsible, CollapsibleItem} from 'react-materialize'

export class Inbox extends Component {
  render() {
    return (
      <div>
        <Collapsible popout >
          <CollapsibleItem header='From: Dane Olsen RE:React Handbook 2/1/2019' icon='email'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='From: Andrew Skinner' icon='drafts'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='From: Tony Dinh' icon='email'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>
      </div>
    )
  }
}

const editorStyle={
  height: '250px'
}

export default Inbox
