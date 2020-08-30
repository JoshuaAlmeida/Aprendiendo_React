import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Foot extends Component {
    render() {
    
        if(this.props.location.pathname === '/character/newCharacter'){
            return (
                <div></div>
            );
        }
        return (
            <div className='foot'>
                <a href=" ">Condiciones de uso </a>
                <a href=" ">Términos legales </a>
                <a href=" ">Política de protección de datos </a>
            </div>
        )
    }
}

export default Foot = withRouter(Foot);