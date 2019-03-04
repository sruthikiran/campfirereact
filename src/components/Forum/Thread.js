import React, { Component } from 'react'
import MyEditor from '../MyEditor'
import {Chip, Button} from 'react-materialize'
import Image from '../../img/dude.png'

export class Thread extends Component {
  render() {
    return (
      <div style={threadStyle}>
        <div style={originalPost}>
            <h4>Thread Title</h4>
            <p>Posted by: <Chip><img  className="circle" src={Image} /> Dane Olsen</Chip></p>
            <p>on 3/1/2019 at 4:45pm</p>
            <p>Tags: <Chip>Python</Chip><Chip>Java</Chip><Chip>OOP</Chip></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <hr style={hrStyle} />
        <div style={threadResponse}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Posted by:  <Chip><img  className="circle" src={Image} /> Andrew Skinner</Chip></p>
            <p>on 3/1/2019 at 6:00pm</p>
            <Button style={btnStyle} className='indigo right'><i className="material-icons">thumb_up</i> +300</Button>
        </div>
        <hr style={hrStyle} />
        <div style={threadResponse}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Posted by:  <Chip><img  className="circle" src={Image} /> Andrew Skinner</Chip></p>
            <p>on 3/1/2019 at 6:00pm</p>
            <Button style={btnStyle} className='indigo right'><i className="material-icons">thumb_up</i> +10</Button>
        </div>
        <hr style={hrStyle} />
        <div style={threadResponse}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Posted by:  <Chip><img  className="circle" src={Image} /> Andrew Skinner</Chip></p>
            <p>on 3/1/2019 at 6:00pm</p>
            <Button style={btnStyle} className='indigo right'><i className="material-icons">thumb_up</i> +2</Button>
        </div>
        <hr style={hrStyle} />
        <div style={editor}>
            <MyEditor />
        </div>
      </div>
    )
  }
}

const btnStyle={
    marginTop: '-4em',
    width: '9em',
}

const editor={

}

const originalPost={
    
}

const threadResponse={
    marginLeft: '1em',
}

const imgStyle={
    height: '1em',
    width: '1em',
}

const threadStyle={
    border: '2px white solid',
    borderRadius: '5px',
    padding: '2em',
    paddingBottom: '5em',
}

const hrStyle={
    margin: '1em 0em',
}


export default Thread
