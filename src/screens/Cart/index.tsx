/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
  Text,
  Pressable,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Input from '@components/Input';
import Card from '@components/Card';
import { selectCartItems } from '@store/cart/selectors';
import { updateCart } from '@store/cart/actions';
import { RootStackParamList } from '../../appStack';

import styles from './styles';

export type CartItemType = {
  name: string;
  price: string;
  id: string;
  count: number;
};

function CartPage(): JSX.Element {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartItems);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let newTotal = 0;
    // eslint-disable-next-line array-callback-return
    cartList.map((item: CartItemType) => {
      newTotal += +item.price * item.count;
    });

    setTotal(newTotal);
  }, [cartList]);

  const onPress = (props: CartItemType) => {
    dispatch(updateCart(props));
  };

  // eslint-disable-next-line no-underscore-dangle
  const _renderItem = ({ item }: ListRenderItemInfo<CartItemType>) => (
    <View style={styles.itemContainer}>
      <View style={styles.flex}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.actionButtonGroup}>
        <Pressable
          style={styles.actionButton}
          onPress={() =>
            onPress({
              name: item.name,
              price: item.price,
              id: item.id,
              count: item.count - 1,
            })
          }>
          <Text style={styles.actionButtonLabel}>-</Text>
        </Pressable>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{item.count}</Text>
        </View>
        <Pressable
          style={styles.actionButton}
          onPress={() =>
            onPress({
              name: item.name,
              price: item.price,
              id: item.id,
              count: item.count + 1,
            })
          }>
          <Text style={styles.actionButtonLabel}>+</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={cartList}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottom}>
          <View style={styles.flex}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.total}>{total.toFixed(2)} TL</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonLabel}>Complate</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default CartPage;
