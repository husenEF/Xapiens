import React, {createContext, PureComponent} from 'react';

import {getUser} from '../service/user.api';

const CounterContext = createContext();

class CounterProvider extends PureComponent {
  state = {counterData: 0, users: []};
  componentDidMount() {
    setTimeout(() => this.setState({counterData: 50}), 3000);
  }

  getUserData = async () => {
    const dataRaw = await getUser();
    console.log({dataRaw});
    this.setState({users: dataRaw});
  };

  inc = () => {
    this.setState({counterData: this.state.counterData + 1});
  };
  render() {
    const {children} = this.props;
    const {counterData, users} = this.state;
    // const data = {}
    const masterData = {
      data: counterData,
      users,
      masterData: this.state,
      increment: this.inc,
      callUser: this.getUserData,
    };
    return (
      <CounterContext.Provider value={masterData}>
        {children}
      </CounterContext.Provider>
    );
  }
}

const CounterConsumer = CounterContext.Consumer;

export {CounterConsumer, CounterProvider};

export default CounterContext;
