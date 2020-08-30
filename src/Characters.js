import React, { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import { Link } from 'react-router-dom';
import "./Characters.css";
import MyCard from "./Card";
import {actions} from "./store";
import {connect} from "react-redux";


export class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterName: "",
      click:0
    };
  }

  componentDidMount() {
    if (this.props.characters.length === 0) {
        setTimeout(() => {
            fetch("https://rickandmortyapi.com/api/character/")
                .then(r => r.json())
                .then(d => {
                    this.props.setCharacters(d.results);
                });
        }, 0);
    }
  }

  extractChapter = (chapters) => {
    let res = [];
    chapters.forEach((ch) => res.push(ch.split("/").slice(-1)[0]));
    return res.join(",");
  };

  filterCharacters = (e) => {
    let value = '';
    if (e.target.value.length >= 3) {
      value = e.target.value;
    }
    this.setState({ filterName: value });
  };

  setClick = (ev) => {
    this.setState({click: this.state.click + 1});
    if (this.props.click) {
        this.setState({ fake: this.props.click(this.state.click) });
    }
    return false;
}


  render() {
    return (
      <div>
        {/* <a className="link" onClick={this.setClick}>Hacer Click ({this.state.click})</a> */}
        <br></br>
        { this.props.characters.length === 0 && <div className="loading">Cargando...</div> }
        <Input
          onChange={this.filterCharacters}
          placeholder="Filtrar personaje por nombre"
        ></Input>
        <br></br>
        <Container>
          <Row>
            {this.props.characters.map((ch, i) => {
              if (ch.name.includes(this.state.filterName)) {
                return (
                  <Col key={i}>
                    <Link to={'/character/' + ch.id}>
                      <MyCard
                        name={ch.name}
                        status={ch.status}
                        gender={ch.gender}
                        img={ch.image}
                        chapters={this.extractChapter(ch.episode)}
                      />
                    </Link>
                  </Col>
                );
              } else {
                return [];
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapState =(state) => {
  return {characters:state.characters};
}

const mapActions = {setCharacters : actions.setCharacters};

const characters = connect(mapState, mapActions)(Characters);

export default characters;
