import React from 'react';
import { View } from 'react-native';
import { Text } from '../Container/styles';

import { 
  FinishButtonContainer,
  ActionNameContainer,
  CloseButtonContainer,
  ContinueContainer
 } from './styles';

import {
  Close
} from '~/assets/icons'


const FinishButton = (props) => {
  return (
    <FinishButtonContainer>
      <ActionNameContainer>
        <Text size="16" color="label">{props.text}</Text>  
      </ActionNameContainer>        
      <ContinueContainer>
        <Text size="16" weight="bold" color="title" >CONTINUAR</Text>
      </ContinueContainer>
      <CloseButtonContainer>
        <Close/>
      </CloseButtonContainer>
    </FinishButtonContainer>
  )
}

export default FinishButton;