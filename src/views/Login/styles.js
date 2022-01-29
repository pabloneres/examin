import styled from 'styled-components/native';

export const InnerContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const GenericContainer = styled.View`
  align-items: center;
  justify-content: center;
`;



export const ContainerLogo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  padding-top: 20px;
  margin-bottom: 45px;
`;
export const ContainerTouchables = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TouchableSocialMedia = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  background-color: ${props => props.background || '#000'};
  justify-content: center;
  align-items: center;
  margin: 0 12px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.buttonSecundary};
  border-radius: 5px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  margin-top: 16px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.title};
  border-radius: 5px;
  margin-bottom: 32px;
`;
