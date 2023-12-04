import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';

import FilleddCircleIcon from '../../resources/icons/FilleddCircleIcon.png';
import EmptyCircleIcon from '../../resources/icons/EmptyCircleIcon.png';

import styles from './styles';

function RadioButton(props: {
  title: string;
  desc: string;
  selected: boolean;
  onPress: () => void;
}) {
  const { title, desc, selected, onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        ...(selected
          ? [
              {
                borderColor: '#28AF6E',
              },
            ]
          : []),
      ]}>
      <Image
        style={{ marginLeft: 20 }}
        source={selected ? FilleddCircleIcon : EmptyCircleIcon}
      />
      <View style={styles.background}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </Pressable>
  );
}

export default RadioButton;
