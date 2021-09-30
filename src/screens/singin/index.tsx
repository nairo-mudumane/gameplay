import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles';

export function SingIn() {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>{text}</Text>

      <TextInput style={styles.input} onChangeText={setText} />
    </View>
  );
}
