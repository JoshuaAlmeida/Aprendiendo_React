import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { actions } from "./store";
import { connect } from "react-redux";

export class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      status: this.props.status || 'Alive',
      gender: this.props.gender || 'Male',
      chapters: this.props.chapters || '0'
    }
  }

  change = (value, e) => {
    this.setState({ [value]: e.target.value });
  }

  saveCharacter = (e) => {
    let newCharacter = {
      name: this.state.name,
      status: this.state.status,
      gender: this.state.gender,
      episode: [this.state.chapters]
    };
    this.props.addCharacter(newCharacter);
    this.props.history.push('/index');
  }

  render() {
    return (
      <div className='form'>
        <Form>
          <Input type="text" onChange={this.change.bind(this, "name")} placeholder='Name' value={this.state.name}></Input>
          <Input type="text" onChange={this.change.bind(this, "status")} placeholder='Status' value={this.state.status}></Input>
          <Input type="text" onChange={this.change.bind(this, "gender")} placeholder='Gender' value={this.state.gender}></Input>
          <Input type="text" onChange={this.change.bind(this, "chapters")} placeholder='Chapters' value={this.state.chapters}></Input>
          <Button onClick={this.saveCharacter}>Guardar</Button>
        </Form>
      </div>
    );
  }
}

const myForm = connect(null, {addCharacter: actions.addCharacter})(MyForm);

export default myForm;
