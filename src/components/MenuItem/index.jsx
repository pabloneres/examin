import React from 'react';
import { Row, Text } from '../Container/styles';
import Notification from '../Notification';

import { MenuContainer, TitleMenuContainer } from './styles';

function MenuItem({
  Icon,
  title,
  notify,
  last
}) {
  return (
    <MenuContainer last={last}>
      <Row justify="space-between">
        {Icon}
        {notify ? <Notification number={notify} /> : <></>}
      </Row>
      <TitleMenuContainer>
        <Text size="12" color="label">{title}</Text>
      </TitleMenuContainer>
    </MenuContainer>
  )
}

export default MenuItem;