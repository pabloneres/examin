import styled from 'styled-components/native';

export const ContainerNotification = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({theme}) => theme.colors.card3};
  justify-content: center;
  align-items: center;
`;
