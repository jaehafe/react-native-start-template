import React from 'react';
import {Text} from 'react-native';
import {styled} from 'styled-components/native';

export interface HeaderProps {
  leftTitleIcon?: React.ReactNode;
  leftTitle?: string;
  onPressLeft?: () => void;

  rightTitleIcon?: React.ReactNode;
  rightTitle?: string;
  onPressRight?: () => void;
}

export default function Header({
  leftTitleIcon,
  leftTitle,
  onPressLeft,

  rightTitleIcon,
  rightTitle,
  onPressRight,
}: HeaderProps) {
  return (
    <Container>
      <Wrapper onTouchEnd={onPressLeft}>
        {leftTitleIcon && <Text>{leftTitleIcon}</Text>}
        {leftTitle && <Text>{leftTitle}</Text>}
      </Wrapper>
      <Wrapper onTouchEnd={onPressRight}>
        {rightTitleIcon && <Text>{rightTitleIcon}</Text>}
        {rightTitle && <Text>{rightTitle}</Text>}
      </Wrapper>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 16px;

  border: 1px solid;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  border: 1px solid;
`;
