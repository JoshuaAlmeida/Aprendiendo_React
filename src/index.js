import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Error404 from './Error404';
import Heading from './Heading';
import Footing from './Footing';
import MyForm from './MyForm';
import Characters from './Characters';
import Character from './Character';
import { Provider } from 'react-redux';
import {store} from "./store";

//Documentación

//Componentes y estilos
//https://github.com/FortAwesome/react-fontawesome
//https://reactstrap.github.io/

//Enrutamiento y Redux
//https://react-redux.js.org/
//https://reactrouter.com/

//Testing
//https://jestjs.io/es-ES/
//https://sinonjs.org/
//https://enzymejs.github.io/enzyme/

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Heading></Heading>
      <div>
        <Switch>
          <Route path={['/index', '/', '/characters']} exact component={Characters}></Route>
          <Route path='/character/newCharacter' exact component={MyForm}></Route>
          <Route path='/character/:id' exact component={Character}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </div>
      <Footing></Footing>
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
