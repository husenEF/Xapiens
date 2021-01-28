import React from 'react';
import {Text} from 'react-native';

// cara 1  arrow function
const Hello = (props) => {
  console.log({props});
  // name
  // umur

  return (
    <Text>
      Hello {props.name}
      {props.umur !== '' ? `- umur : ${props.umur}` : null}
    </Text>
  );
};

Hello.defaultProps = {
  name: 'Budi',
  isShow: false,
};

export default Hello;

// cara 2 dengan variable
const HelloVar = function () {
  return <Text>Hello Var</Text>;
};

// cara 3 normal
function HelloFunction() {
  return <Text>Hallo Function</Text>;
}

export {HelloVar, HelloFunction};
