import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text'

export const ContainerInput = styled.View`
  width: 100%;
  margin-top: ${props => props.first ? '5px' : '20px'};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

export const InputMask = styled(TextInputMask)`
  width: 100%;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.backgoundInput};
  border-color: ${({theme, focus}) => focus ? theme.colors.title : theme.colors.borderInput};
  font-size: 16px;
`;

export const InputWrapper = styled.View`
  width: 100%;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.backgoundInput};
  border-color: ${({theme, focus}) => focus ? theme.colors.title : theme.colors.borderInput};
  font-size: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ButtonPassword = styled.TouchableOpacity`
`

