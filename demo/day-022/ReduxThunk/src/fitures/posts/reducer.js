import {GET_POST, GET_DETAIL, SET_LOADING, SET_POST} from './constans';

const deefaultState = {
  list: [],
  loading: true,
  detail: {},
  id: null,
};

const reducer = (state = deefaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.value};
    case GET_DETAIL:
      return {...state, id: action.value};

    case SET_POST:
      return {...state, list: action.value};
    case GET_POST:
    default:
      return state;
  }
};

export default reducer;
