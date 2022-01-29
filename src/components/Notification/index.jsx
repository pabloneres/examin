import React from 'react';
import { View } from 'react-native';
import { Text } from '../Container/styles';

import { ContainerNotification } from './styles';

const Notification = (props) => {
  return (
    <ContainerNotification>
      <Text weight="bold" size="12">{props.number}</Text>
    </ContainerNotification>
  )
}

export default Notification;