const defaultUser = {
  name: 'Husen',
  addresss: 'Jln Palagan',
  office: 'Jlan Palagan',
  jobs: 'Trainer',
};
const userReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {...state, name: action.payload};

    case 'DETAIL_USER':
    default:
      return state;
      break;
  }
};
export default userReducer;
