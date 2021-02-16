export const updateName = (name) => {
  return {type: 'UPDATE_NAME', payload: name};
};

export const resetName = () => {
  return {type: 'RESET_NAME', payload: 'Refactory'};
};
