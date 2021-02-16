import {RESET, UPDATE_NAME} from './constans';

const defaultState = {
  name: 'Refactory',
  isLandingPage: true,
  addres: {
    home: 'Jalan palagan',
    office: 'Jlan Plemburan',
  },
};

const reducer = (state = defaultState, action) => {
  // console.log('global-reducer', {store: action});
  switch (action.type) {
    case UPDATE_NAME:
      return {...state, name: action.payload};
    case 'UPDATE_ADDRES':
      const newState = state;
      newState.addres.home = 'jlan kaliurang';
      return newState;
    // return {...state, addres: {...state.addres, home: 'jlan kaliurang'}};
    case RESET:
      return {...state, name: 'Refactory'};
    default:
      return state;
  }
};

export default reducer;
