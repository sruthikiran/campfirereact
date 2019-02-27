import React, { Component } from 'react'
import {Button, Icon, Collapsible, CollapsibleItem, Row, Input} from 'react-materialize'


export class NetworkLeft extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <h6 style={headerStyle}> FILTER YOUR RESULTS </h6>
          <Collapsible>
            <CollapsibleItem header='Name' icon = "person">
                <label> Name </label>
                <input type="text"/>
            </CollapsibleItem>
            <CollapsibleItem header='Profession' icon='work'>
              <Row>
                <Input s={12} label="Role" />
                <Input s={12} label="Company" />
              </Row>
            </CollapsibleItem>
            <CollapsibleItem header='Location' icon='place'>
              <Row>
                <Input s={12} label="State" />
                <Input s={12} label="City" />
              </Row>
            </CollapsibleItem>
            <CollapsibleItem header='Cohort' icon='school'>
              <Row>
                <Input s={12} label="MM/YYYY" />
                <Input s={12} label="Campus" />
              </Row>
            </CollapsibleItem>
          </Collapsible>
          <Button  className="indigo buttonStyle" >Search<Icon right>search</Icon></Button>
        </form>
      </React.Fragment>
    )
  }
}

const headerStyle = {
  fontWeight : 'bold',
  margin : '1.5em',
}

const buttonStyle = {
  marginTop : '2em',
  marginBottom : '2em',
  width : '100%'
}

export default NetworkLeft
