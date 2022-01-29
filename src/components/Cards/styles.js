import styled from 'styled-components/native';
import { ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export const CardContainer = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100%;
  height: 152px;
  border-radius: 8px;
  background-color: ${({theme, color}) => theme.colors[color] || "#000"};
`

export const ContainerPosition = styled.View`
  width: 100%;
  height: 100%
  position: absolute;
  padding: 20px;
  justify-content: space-between;
`

export const ImageBackgroundContainer = styled(ImageBackground)`
  flex: 1;
  width: 70%;
  margin-left: auto;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 20px;
`
