import React, { Component } from 'react'

export class AllTopics extends Component {
  render() {
    return (
      <div>
        <table >
            <tr>
                <td> <i class="material-icons"> folder_open </i> </td>
                <td> <ul style={tabColStyle}> 
                        <li>Welcome Mat</li>
                        <li>We encourage new members to introduce themselves here......</li>
                    </ul> </td>
                <td>General, Python, Java</td> 
                <td> <ul style={tabColStyle}> 
                        <li>35</li>
                        <li>Replies</li>
                    </ul></td>
                <td>  <ul style={tabColStyle} >
                        <li>Last Reply:Sruthi Suryadevara</li>
                        <li> 2 days ago</li>
                     </ul>
                </td>
            </tr>
            <tr>
                <td> <i class="material-icons"> folder_open </i> </td>
                <td> <ul style={tabColStyle} >
                        <li>Welcome Mat</li>
                        <li>We encourage new members to introduce themselves here......</li>
                    </ul>
                    </td>
                <td>General, Python, Java</td> 
                <td> <ul style={tabColStyle} > 
                        <li>35</li>
                        <li>Replies</li>
                    </ul>
                    </td>
                <td> <ul style={tabColStyle} >
                        <li>Last Reply:Sruthi Suryadevara</li>
                        <li> 2 days ago</li>
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

export default AllTopics
