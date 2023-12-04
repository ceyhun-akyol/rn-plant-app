import React from 'react';
import { Text, ImageBackground, Pressable } from 'react-native';

import { QuestionType } from 'src/types';

import styles from './styles';

type CardProps = QuestionType;

function QuestionCard(props: CardProps) {
  const { imageUri, title } = props;

  return (
    <Pressable onPress={() => null} style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: imageUri }}
        imageStyle={{ borderRadius: 12 }}>
        <Text style={styles.desc} ellipsizeMode="tail">
          {title}
        </Text>
      </ImageBackground>
    </Pressable>
  );
}

export default QuestionCard;
