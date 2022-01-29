import styled from 'styled-components/native';

export const FinishButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.buttonSecundary};
`
  
export const ActionNameContainer = styled.View`
  flex: 1;
`

export const CloseButtonContainer = styled.View`
  width: 10px;
  margin-left: 20px;
`

export const ContinueContainer = styled.TouchableOpacity`
  
`