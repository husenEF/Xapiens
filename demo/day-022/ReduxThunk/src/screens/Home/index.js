import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchPost} from '../../fitures/posts/action';

import {Header, Footer} from '@components';
// import {Header, Footer} from '../../components';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }
  render() {
    const {listPost} = this.props;
    return (
      <View>
        <Header />
        <Text>Home screen</Text>
        {/* <Text>{JSON.stringify(listPost)}</Text> */}
        <Footer />
      </View>
    );
  }
}

// export default  Home;
const mapStateToProps = (state) => {
  const {post} = state;
  return {
    listPost: post.list,
  };
};

const mapDispatchToProps = {
  fetchPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
