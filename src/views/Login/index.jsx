import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '~/components/Container';
import { Text } from '~/components/Container/styles';
import InputComponent from '~/components/Input';
import {GenericContainer, InnerContainer, ContainerLogo, ContainerTouchables, TouchableSocialMedia, ButtonLogin, ButtonRegister } from './styles';

import {
  Apple,
  LogoFull,
  Facebook,
  Google,
} from '~/assets/icons'

const Login = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <InnerContainer>
        <GenericContainer>
          <ContainerLogo>
            <LogoFull/>
          </ContainerLogo>
          <Text weight="bold" size="20" style={{marginBottom: 18}}>Entre usando</Text>
          <ContainerTouchables>
            <TouchableSocialMedia background="#4267B2">
              <Facebook/>
            </TouchableSocialMedia>
            <TouchableSocialMedia background="#DB4437">
              <Google/>
            </TouchableSocialMedia>
            <TouchableSocialMedia>
              <Apple/>
            </TouchableSocialMedia>
          </ContainerTouchables>
          <Text size="16" color="placeholder" style={{marginTop: 40}}>Ou informe seus dados de acesso</Text>
          <InputComponent
            first
            inputProps={{
              placeholder: '000.000.000-00'
            }}
            labelProps={{
              weight: 'bold',
              size: "12",
              color: 'label',
              style: {marginLeft: 15}
            }}
            label="CPF"
            mask="cpf"
          />
          <InputComponent
            inputProps={{
              secureTextEntry: true,
              placeholder: '********'
            }}
            labelProps={{
              weight: 'bold',
              size: "12",
              color: 'label',
              style: {marginLeft: 15}
            }}
            label="SENHA"
          />
          <TouchableOpacity style={{width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 12}}>
            <Text weight="bold" size="12">ESQUECI MINHA SENHA</Text>
          </TouchableOpacity>

          <ButtonLogin onPress={() => navigation.navigate('Home')}>
            <Text size="16" weight="bold" color="title">ENTRAR</Text>
          </ButtonLogin>
        </GenericContainer>

        <GenericContainer>
          <Text weight="regular" size="16" color="placeholder">Novo por aqui? Crie a sua conta</Text>
          <ButtonRegister>
            <Text size="16" weight="bold" color="white">CRIAR CONTA</Text>
          </ButtonRegister>
        </GenericContainer>
      </InnerContainer>

    </Container>
  )
}

export default Login;