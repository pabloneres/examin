import styled from 'styled-components/native';

export const MenuContainer = styled.TouchableOpacity`
  width: 116px;
  height: 116px;
  background-color: ${({theme}) => theme.colors.background};
  border-color: ${({theme}) => theme.colors.borderInput};
  border-width: 1px;
  margin-right: ${props => props.last ? '0px' : '16px'};
  border-radius: 20px;
  padding: 15px;
`;

export const TitleMenuContainer = styled.View`
  margin-top: 25px;
`