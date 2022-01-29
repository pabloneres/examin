import React from 'react';
import { Container, WrapperContainer } from './styles';

const ContainerComponent = (props) => {
  return (
    <Container>
      {props.extra}
      <WrapperContainer>
        {props.children}
      </WrapperContainer>
    </Container>
  )
}

export default ContainerComponent;