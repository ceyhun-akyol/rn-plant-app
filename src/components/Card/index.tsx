import React from 'react';
import { Text, ImageBackground, Pressable } from 'react-native';

import { CategoryType } from 'src/types';

import styles from './styles';

type CardProps = CategoryType;

function Card(props: CardProps) {
  const { title, image } = props;

  return (
    <Pressable onPress={() => null} style={styles.container}>
      <ImageBackground style={styles.image} source={{ uri: image.url }}>
        <Text style={styles.label}>{`${title}`}</Text>
      </ImageBackground>
    </Pressable>
  );
}

export default Card;
