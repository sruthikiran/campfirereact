import React, { Component } from 'react'
import NetworkCard from './NetworkCard'


const allAlum = [
  {id:1,firstName: 'Dane1', lastName:'Olsen1', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd',location: 'San Jose', url: 'linkedin.com'},
  {id:2,firstName: 'Dane2', lastName:'Olsen2', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd', location: 'San Jose',url: 'linkedin.com'},
  {id:3,firstName: 'Dane3', lastName:'Olsen1', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd', location: 'San Jose', url: 'linkedin.com'},
  {id:4,firstName: 'Dane1', lastName:'Olsen1', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd',location: 'San Jose', url: 'linkedin.com'},
  {id:5,firstName: 'Dane2', lastName:'Olsen2', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd', location: 'San Jose',url: 'linkedin.com'},
  {id:6,firstName: 'Dane3', lastName:'Olsen1', role: 'React Frontend Engineer' , company: 'DaneOlsen Ltd', location: 'San Jose', url: 'linkedin.com'},
]


export class NetworkRight extends Component {
    render () {
    return (
      <React.Fragment>
        {allAlum.map((alum) => (
          <div className="col s12 m6 l6 xl4">
            <NetworkCard key={alum.id} alum={alum} />
          </div>
        ))}
      </React.Fragment>
    )}
    }

export default NetworkRight
