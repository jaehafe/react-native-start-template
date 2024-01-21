import React from 'react';
import {Platform, Text, View} from 'react-native';

// import Button from '@ant-design/react-native/lib/button';
// import {Toast} from '@ant-design/react-native';

import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Home = () => {
  const statusBarHeight = getStatusBarHeight();

  return (
    <Container marginTop={Platform.OS === 'ios' ? statusBarHeight + 30 : 0}>
      <View />
      <Text>Home</Text>
    </Container>
  );
};

export default Home;

const Container = styled.View<{marginTop?: number}>`
  border: 1px solid;
  margin-top: ${({marginTop}) => `${marginTop}px`};
`;
