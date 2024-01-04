import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

export function SignIn(){
  //armazena valor
  const [text, setText] = useState('');

  return (
    <View style={styles.container}> 
      <Text>Hi Beatriz !</Text>

      <TextInput 
      style={styles.input}
      //mostra o valor
      onChangeText={setText}
      />

      <Text>
        Você digitou: { text }
      </Text>

    </View>
  );
}