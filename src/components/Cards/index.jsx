import React from 'react';
import { View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Row, Text } from '../Container/styles';
import { CardContainer, ImageBackgroundContainer, ContainerPosition } from './styles';
import Notification from '../Notification';

const Cards = ({
  Icon,
  background,
  card,
  text,
  notify
}) => {
  return (
    <CardContainer {...card}>
      <ContainerPosition>
        <Row justify="space-between">
          {Icon}
          {notify ? <Notification number={notify}/> : <></>}
        </Row>
        <Text size="20" color="background">{text}</Text>
      </ContainerPosition>
      <ImageBackgroundContainer
        {...background}
        resizeMode="cover"
      >
      </ImageBackgroundContainer>
    </CardContainer>
  )
}

export default Cards;