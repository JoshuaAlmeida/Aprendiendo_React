import React, { Component } from 'react';
import MyCard from './Card';
import { Link,Redirect } from 'react-router-dom';
import { connect } from "react-redux";

export class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
        }
    }


    componentDidMount() {
        let id = parseInt(this.props.match.params.id, 10);
        if (this.props.characters.length === 0) {
            return;
        }

        if (this.props.characters.length)

            if (!this.props.character || this.props.characters.id !== id) {
                let characterfiltered = this.props.characters.filter(ch => ch.id === id);
                this.setState({ character: characterfiltered[0] });
            }
    }

    render() {

        if (!this.state.character) {
            if(this.state.character === undefined){
                return <Redirect to='/'></Redirect>;
            }else{
                return <div className="alert alert-danger">Personaje no encontrado</div>
            }              
        }
        let ch = this.state.character;
        if (ch.error) {
            return <div className="alert alert-danger">{ch.error}</div>
        } else {
            return (
                <div>
                    <MyCard
                        name={ch.name}
                        status={ch.status}
                        gender={ch.gender}
                        img={ch.image}
                        chapters ={ch.episode}
                    />
                    <Link to='/index'>Volver</Link>
                </div>
            );
        }
    }
}
const mapState = (state) => {
    return { characters: state.characters };
}

const character = connect(mapState, null)(Character);

export default character;