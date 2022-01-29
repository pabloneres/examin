import React, {useState, useRef} from 'react';
import { View } from 'react-native';

import { ContainerInput, Input, Label, InputMask, InputWrapper, ButtonPassword } from './styles';
import { Text } from '~/components/Container/styles';

import {
  ShowPassword,
  HidePassword
} from '~/assets/icons'

const InputComponent = ({
  labelProps,
  label,
  inputProps,
  mask,
  first
}) => {
  const [cpf, setCpf] = useState()
  const [showPassword, setShowPassword] = useState(false)
  const [focus, setFocus] = useState()

  const handleChangeShowPass = (bool) => {
    setShowPassword(bool)
  }

  const handleChangeFocus = (type) => {
    setFocus(type)
  }

  return (
    <ContainerInput first={first}>
      <Text {...labelProps}>{label}</Text>
      {mask ? 
        <InputMask type={mask} {...inputProps}
          value={cpf}
          onChangeText={e => setCpf(e)}
          onFocus={() => handleChangeFocus('cpf')}
          onBlur={() => handleChangeFocus()}
          focus={focus === 'cpf' ? true : false}
        /> : 
        <InputWrapper
          focus={focus === 'pass' ? true : false}
        >
          <Input {...inputProps}
            value={cpf}
            onChangeText={e => setCpf(e)}
            secureTextEntry={!showPassword}
            onFocus={() => handleChangeFocus('pass')}
            onBlur={() => handleChangeFocus()}
          />
          {
            showPassword ?
            <ButtonPassword onPress={() => handleChangeShowPass(false)}>
              <HidePassword/> 
            </ButtonPassword>
            :
            <ButtonPassword onPress={() => handleChangeShowPass(true)}>
              <ShowPassword/>
            </ButtonPassword>
          }
        </InputWrapper>
      }
    </ContainerInput>
  )
}

export default InputComponent;