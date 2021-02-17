import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchPost} from '../../fitures/posts';

class Home extends Component {
  componentDidMount() {
    console.log({props: this.props});
    this.props.fetchPost();
  }
  render() {
    return (
      <View>
        <Text>Home screen</Text>
      </View>
    );
  }
}

// export default  Home;
const mapStateToProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchToProps = {
  fetchPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
