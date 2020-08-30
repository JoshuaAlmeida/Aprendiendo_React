//Redux
import {createStore, combineReducers} from 'redux';


const initialState = {
  characters: []
}

//Acciones
export const actions = {
    addCharacter : (character) => {
        return {
          type: 'addCharacter',
          payload: character
        };
    },
    removeCharacter: (name) =>{
      return{
        type: 'removeCharacter',
        payload: {name:name}
      }
    },
    setCharacters : (characters) =>{
        return {
            type: 'setCharacters',
            payload: {characters: characters}
          };
    }
}
//Reducers

function characterReducer(state = [], action) {

  switch (action.type) {

    case 'addCharacter': {
      let newState = [ ...state ];
      let newCharacter = { ...action.payload, id: newState.length + 1 };
      newState.push(newCharacter);
      return newState;
    }
    case 'removeCharacter':{
      let newState = [...state];
      let index = -1;
      newState.forEach((ch, i) => {
        if (ch.name === action.payload.name) {
          index = i;
        }
      });
      if (index !== -1) {
        newState.splice(index, 1);
      }
      return newState;
    }
    case 'setCharacters':
        return action.payload.characters;
    default:
      return state;
  }
}

const appReducer = combineReducers ({characters: characterReducer});

//StoreReducer
export const store = createStore(appReducer, initialState);

window.storeReducer = store;

//End Redux