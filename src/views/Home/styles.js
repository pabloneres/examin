import styled from 'styled-components/native';

export const ContainerProfile = styled.View`
  flex-direction: row;
  height: 130px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.backgoundInput};
`;

export const PaddingPerfil = styled.View`
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const ContainerInfosProfile = styled.View`
  margin-left: 16px;
`;

export const ContainerCards = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`

export const ContainerMenu = styled.ScrollView.attrs({
  horizontal: true,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  height: 160px;
  margin: 10px 0 0;
`

export const ContainerHome = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const NameContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  
`