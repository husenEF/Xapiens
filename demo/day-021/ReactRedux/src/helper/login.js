import {setLogin} from '../features/auth/actions';
import {LOGIN} from '../features/auth/constants';

const loginHelper = ({dispatch}) => {
  // Called when calling applyMiddleware so
  // our middleware can have access to the store
  //   console.log('loginhelper', {store});

  return (next) => {
    // next is the following action to be run
    // after this middleware
    console.log('loginhelper', {next});
    return (action) => {
      // finally, this is where our logic lives for
      // our middleware.

      if (action.type == LOGIN) {
        console.log('action-login run');
        dispatch(setLogin());
      }

      console.log('loginhelper', {action});
      return next(action);
    };
  };
};
export default loginHelper;
