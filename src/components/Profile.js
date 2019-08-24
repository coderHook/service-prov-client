import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormFeedback, Badge } from 'reactstrap';

export default class Profile extends React.Component {
  state = {
    mySkills: [],
    name: '',
    age: '',
    picture: ''
  }

  handleSkills = (skill) => { 
    if(this.state.mySkills.includes(skill) === false) {
      this.setState({
        mySkills: this.state.mySkills.concat(skill)})
    }
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  render() {
    const {name, age, picture } = this.state
    return (
      <div>
        
        <h1 align="center">Create new Profile</h1>

        <Form style={{'width': '500px', 'margin': '50px auto'}}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="eventName">Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your Name" 
                  onChange={this.handleChange}
                />

              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input 
                  type="number" 
                  name="age" 
                  id="age" 
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row style={{'marginTop': '30px'}}>
            <Col md={6}>
              <FormGroup>
                <Label for="eventDescription">Picture</Label>
                <Input 
                  type="url" 
                  name="picture" 
                  id="piture" 
                  placeholder="Your Profile Picture" 
                  onChange={this.handleChange}
                />
              </FormGroup>            
            </Col>
            <Col md={6}>
              <img src={this.state.picture || "http://placehold.jp/200x200.png"} 
                alt="event img" width="200" height="200" />
            </Col>
          </Row>
          <Row style={{'marginTop': '30px'}}>
          
            <div style={{margin: '30px auto'}} id="skills">
            {
            this.props.skills.map(skill => {
             return <Badge className="mx-3 my-2" href="#skills" color='info' pill onClick={() => this.handleSkills(skill)}>
                {skill}
              </Badge>
            })
          }
            </div>
  
            <div className="my-4">
              <h3>Select at least 3 skills:</h3> 
              {
                this.state.mySkills.map(skill => {
                  return (
                    <div className="mx-2 my-2">
                      {skill} 
                    <input className="mx-2" type="number" name="Level" min="1" max="10" />
                    </div>)
                })
              }
            </div>
            
          </Row>
          { 
            this.props.error && 
            <h2>{this.props.error}</h2> 
          }

          
          <Button 
            color="primary" 
            size="lg" block 
            type="submit" 
            onClick={() => this.props.profile(this.state.mySkills)}
            disabled={(name && age && picture && this.state.mySkills.length >= 3) ? false : true}
          >
            Create Profile
          </Button>

        </Form>
      </div>

    );
  }
}