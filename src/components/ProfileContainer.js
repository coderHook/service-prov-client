import React, { Component } from 'react'
import Profile from './Profile'
import Requests from './Requests'
import superagent from 'superagent'

export default class ProfileContainer extends Component {
  state = {
    profile: false,
    error: '',
    skills:['Python', 'Javascript', 'React', 'SQL', 'NoSql', 'ExpressJS', 'Typescript', 'GraphQL'],
    request: '',
    mySkills: ''
  }

  handleProfile = (mySkills) => {
    // event.preventDefault()    
    this.setState({profile: true})

    superagent
      .post('http://localhost:5000/clients')
      .send({mySkills})
      .then(result => {
        const response = JSON.parse(result.text)
        console.log(response.db)
        this.setState({request: response.requests})
      })
      .catch(err => console.log(err))
  }

  render() {
    const {name, age, picture, profile, error, skills } = this.state
    return (
      <div>
        {
          !profile
          ? 
            <Profile 
              name={name} 
              age={age}
              picture={picture}
              profile={ this.handleProfile }
              error= { error }
              skills={skills}
            />
          : !this.state.request
            ? 'Loading ...'
            : this.state.request.map(r => 
                <div className="flex flex-wrap" 
                style={{'display': 'flex', 'justifyContent': 'center'}}>
                  <Requests 
                    name={r.name}
                    description={r.description}
                    startDate={r.startDate}
                    endDate={r.endDate}
                    stack={r.stack}
                    disabled={this.state.request.filter(req => req.startDate === r.startDate).length > 1}
                  />
                </div>
              )
        }
      </div>
    )
  }
}
