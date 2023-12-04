import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';

import RightArrowIcon from '../../resources/icons/RightArrowIcon.png';
import NotifIcon from '../../resources/icons/NotifIcon.png';

import styles from './styles';

function Button() {
  return (
    <Pressable style={styles.container} onPress={() => null}>
      <Image style={styles.icon} source={NotifIcon} />
      <View style={styles.flex}>
        <Text style={styles.title}>FREE Premium Available</Text>
        <Text style={styles.desc}>Tap to upgrade your account!</Text>
      </View>
      <Image style={styles.icon} source={RightArrowIcon} />
    </Pressable>
  );
}

export default Button;
