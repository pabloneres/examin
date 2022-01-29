import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  paddingTop: ${Constants.statusBarHeight};
  width: 100%;
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const WrapperContainer = styled.View`
  margin: 0 auto;
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  width: 90%;
`;

export const Text = styled.Text`
  font-family: ${props => props.theme.fonts[props.weight] || props.theme.fonts.regular};
  color: ${props => props.theme.colors[props.color] || '#000'};
  font-size: ${props => props.size || "12"};
  margin-bottom: 5px;
`

export const Row = styled.View`
  z-index: 5;
  width: 100%;
  flex-direction: row;
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'center'};
`