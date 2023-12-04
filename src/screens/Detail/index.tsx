import React from 'react';
import {
  Text,
  useColorScheme,
  ImageBackground,
  Image,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetail } from '@store/list/selectors';

import { updateCart } from '@store/cart/actions';
import { ItemType } from '../List';

import StarIcon from '../../resources/icons/star.png';

import styles from './styles';

function DetailPage(): JSX.Element {
  const dispatch = useDispatch();
  const detail: ItemType = useSelector(selectDetail);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <ImageBackground style={styles.image} source={{ uri: detail.image }}>
          <Image style={styles.starIcon} source={StarIcon} />
        </ImageBackground>
        <Text style={styles.label}>{detail.name}</Text>
        <Text style={styles.desc}>{detail.description}</Text>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.price}>{`${detail.price} ₺`}</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() =>
            dispatch(
              updateCart({
                name: detail.name,
                price: detail.price,
                id: detail.id,
                count: 1,
              }),
            )
          }>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DetailPage;
