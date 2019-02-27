import React, { Component } from 'react'
import {Chip} from 'react-materialize'

export class AllTopics extends Component {
  render() {
    return (
      <div>
        <table >
            <tr>
                <td> <i class="material-icons"> folder_open </i> </td>
                <td> <ul style={tabColStyle}>
                        <li> <span style={titleStyle}> Welcome Mat </span> </li>
                        <li>We encourage new members to introduce themselves here We encourage new members to introduce themselves here......</li>
                    </ul> </td>
                <td><Chip>General</Chip>  <Chip>Python</Chip> <Chip>Java</Chip></td>
                <td> <ul style={tabColStyle}>
                        <li>35 </li>
                        <li style={commonStyle} >Replies</li>
                        <li>50</li>
                        <li style={commonStyle} >Likes</li>
                    </ul></td>
                <td>  <ul style={tabColStyle} >
                        <li >Last Reply: <span style={highlightName}> Sruthi Suryadevara </span> </li>
                        <li style={timeStyle}> 2 days ago</li>
                     </ul>
                </td>
            </tr>
            <tr>
                <td> <i class="material-icons"> folder_open </i> </td>
                <td> <ul style={tabColStyle} >
                        <li> <span style={titleStyle}> Welcome Mat </span> </li>
                        <li>We encourage new members to introduce themselves here We encourage new members to introduce themselves here......</li>
                    </ul>
                    </td>
                <td> <Chip>General</Chip>  <Chip>Python</Chip> <Chip>Java</Chip> </td>
                <td> <ul style={tabColStyle} >
                        <li>35 </li>
                        <li style={commonStyle} >Replies</li>
                        <li>50</li>
                        <li style={commonStyle} >Likes</li>
                    </ul>
                    </td>
                <td> <ul style={tabColStyle} >
                        <li> Last Reply: <span style={highlightName}> Sruthi Suryadevara </span> </li>
                        <li style={timeStyle}> 2 days ago</li>
                    </ul>
                </td>
            </tr>
        </table>
      </div>
    )
  }
}

const tabColStyle = {
    listStyle : 'none'
}

const titleStyle = {
    fontWeight : 'bold',
    fontSize : '1.25em'
}

const timeStyle = {
  fontSize :  '0.75em',
  color : 'green',
}

const commonStyle = {
  fontSize :  '0.75em',
}


const highlightName = {
  fontSize :  '1em',
  color : 'blue',
  fontStyle : 'italic',
}


export default AllTopics
