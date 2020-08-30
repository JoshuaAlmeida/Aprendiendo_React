import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faSkull, faQuestion, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import { Card, CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Button} from 'reactstrap';
import { actions } from './store';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import './Card.css';

library.add(faHeart, faSkull, faQuestion, faMale, faFemale);

export class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
      chapters: this.props.chapters,
    }
  }
  

  rmCharacter = (e) => {
    this.props.removeCharacter(this.props.name);
    this.props.history.push('/');
  }

  chooseIcon = (param)=>{
    let icon = "";
    switch (param) {
      case "Alive":
        icon = faHeart;
        break;
      case "Dead":
        icon = faSkull;
        break;
      case "Male":
        icon = faMale;
        break;
      case "Female":
        icon = faFemale;
        break;
      default:
        icon = faQuestion;
        break;
    }
    return icon;
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg src={this.props.img}></CardImg>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>
              <FontAwesomeIcon icon={this.chooseIcon(this.state.status)}/>
              <FontAwesomeIcon icon={this.chooseIcon(this.props.gender)}/>
            </CardSubtitle>
            <CardText>
              {this.state.chapters}
            </CardText>
             <Button onClick={this.rmCharacter}>Eliminar</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
};

const mapState =(state) => {
  return {characters:state.characters};
}
const mapActions = {removeCharacter : actions.removeCharacter};

const myCard = connect(mapState,mapActions)(MyCard);

export default withRouter(myCard);