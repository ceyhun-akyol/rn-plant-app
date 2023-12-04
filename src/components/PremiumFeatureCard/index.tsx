import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';

import UnlimitedIcon from '../../resources/icons/UnlimitedIcon.png';
import FasterIcon from '../../resources/icons/FasterIcon.png';

import styles from './styles';

function PremiumFeatureCard(props: {
  title: string;
  desc: string;
  icon: 'UnlimitedIcon' | 'FasterIcon';
}) {
  const { icon, title, desc } = props;

  return (
    <Pressable onPress={() => null} style={styles.container}>
      <View style={styles.background}>
        <Image source={icon === 'UnlimitedIcon' ? UnlimitedIcon : FasterIcon} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </Pressable>
  );
}

export default PremiumFeatureCard;
