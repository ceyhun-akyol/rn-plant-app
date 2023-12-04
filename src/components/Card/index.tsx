import React from 'react';
import { Text, ImageBackground, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line import/no-unresolved
import { ItemType } from 'src/screens/List';
import { updateCart } from '@store/cart/actions';
import StarIcon from '../../resources/icons/star.png';

import styles from './styles';

type CardProps = ItemType & { onPress: () => void };

function Card(props: CardProps) {
  const dispatch = useDispatch();

  const { id, image, description, price, name, onPress } = props;

  const onPressAddCart = () => {
    dispatch(
      updateCart({
        name,
        price,
        id,
        count: 1,
      }),
    );
  };
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground style={styles.image} source={{ uri: image }}>
        <Image style={styles.starIcon} source={StarIcon} />
      </ImageBackground>
      <Text style={styles.label}>{`${price} ₺`}</Text>
      <Text style={styles.desc} numberOfLines={2} ellipsizeMode="tail">
        {description}
      </Text>
      <Pressable style={styles.button} onPress={onPressAddCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </Pressable>
  );
}

export default Card;
