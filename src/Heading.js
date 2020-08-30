import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Heading extends Component {
    render() {
        return (
            <div>
                <h1>Aplicación de Rick y Morty</h1>
                <ul className='Menu'>
                    <li> <NavLink to='/index'>Personajes</NavLink></li>
                    <li> <NavLink to='/character/newCharacter'>Formulario</NavLink></li>
                </ul>
            </div>
        )
    }
}
