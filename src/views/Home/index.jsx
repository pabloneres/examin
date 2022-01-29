import React from 'react';
import { View } from 'react-native';
import CardContainer from '~/components/Cards';
import { StatusBar } from 'expo-status-bar';

import Container from '~/components/Container';
import { Text } from '~/components/Container/styles';
import FinishButton from '~/components/FinishButton';
import MenuItem from '~/components/MenuItem';

import {
  IconCard1 as Icon1,
  IconCard2 as Icon2,
  IconCard3 as Icon3,
  IconCard4 as Icon4,
  ChevronDown,
  Clipboard,
  Profile,
  Tinker
} from '~/assets/icons'

import { 
  ContainerProfile, 
  ImageProfile,
  ContainerInfosProfile,
  ContainerCards,
  ContainerMenu,
  ContainerHome,
  PaddingPerfil,
  NameContainer,
 } from './styles';

const Home = () => {
  return (
    <Container
      extra={
        <ContainerProfile>
          <PaddingPerfil>
            <ImageProfile source={require('~/assets/profile.png')}/>
            <ContainerInfosProfile>
              <Text  size="12" color="placeholder">064.987.926-25</Text>
              <NameContainer>
                <Text size="20" weight="bold" color="title">Ola, Yasmin</Text>
                <ChevronDown style={{marginLeft: 8}}/>
              </NameContainer>
              <Text size="12" color="subtitle" >(43) 99937-3800</Text>
            </ContainerInfosProfile>
          </PaddingPerfil>
        </ContainerProfile>
      }
    > 
      <StatusBar backgroundColor='#FBF9F9' />
      <ContainerHome>
        <ContainerCards>
          <FinishButton text="Finalizar cadastro"/>
          <FinishButton text="Alterar senha de acesso"/>
          <FinishButton text="Preencher Anamnese"/>
          <CardContainer
            text="Exames Médicos"
            Icon={<Icon1/>}
            card={{
              color: 'card1'
            }}
            background={{
              source: require('~/assets/image1.png')
            }}
          />
          <CardContainer
            text="Exames Odontológicos"
            Icon={<Icon2/>}
            card={{
              color: 'card2'
            }}
            background={{
              source: require('~/assets/image2.png')
            }}
          />
          <CardContainer
            text="Carteira e Vacinação"
            Icon={<Icon3/>}
            card={{
              color: 'card3'
            }}
            background={{
              source: require('~/assets/image3.png')
            }}
          />
          <CardContainer
            text="Alerta de exames"
            Icon={<Icon4/>}
            card={{
              color: 'card4'
            }}
            background={{
              source: require('~/assets/image4.png')
            }}
            notify={2}
          />
        </ContainerCards>
        <ContainerMenu>
          <MenuItem
            title="Anamnese"
            Icon={<Clipboard/>}
          />
          <MenuItem
            title="Informações pessoais"
            Icon={<Profile/>}
          />
          <MenuItem 
            title="Lembretes"
            Icon={<Tinker/>}
            notify={2}
            last
          />
        </ContainerMenu>
      </ContainerHome>
    </Container>
  )
}

export default Home;