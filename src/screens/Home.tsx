import {Button} from '@ant-design/react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export default function Home() {
  return (
    <SafeAreaView>
      <JetText>Jetbrains</JetText>
      <Button onPress={() => {}}>open drawer</Button>
    </SafeAreaView>
  );
}

const JetText = styled.Text`
  font-family: 'JetBrainsMono-Medium';

  color: ${({theme}) => theme.colors.black};
`;
