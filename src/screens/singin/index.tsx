import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { styles } from './Styles';
import { ButtonIcon } from '../../components/ButtonIcon/';
// import {IllustrationImg}from '../../assets/IllustrationImg.png';

const IllustrationImg = require('../../assets/illustration.png');
export function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        // source={IllustrationImg}
        source={IllustrationImg}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.6} />
      </View>
    </View>
  );
}
