/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Input from '@components/Input';
import Card from '@components/Card';
import { showDetail, updateList } from '@store/list/actions';
import { selectList } from '@store/list/selectors';
import { RootStackParamList } from '../../appStack';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'List', 'AppStack'>;

export type ItemType = {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
};

function ListPage({ navigation }: Props): JSX.Element {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    dispatch(updateList({}));
  }, []);

  const onPressItem = (item: ItemType) => {
    navigation.push('ListDetail');
    dispatch(showDetail(item));
  };

  // eslint-disable-next-line no-underscore-dangle
  const _renderItem = ({ item }: ListRenderItemInfo<ItemType>) => (
    <Card {...item} onPress={() => onPressItem(item)} />
  );

  return (
    <View style={styles.container}>
      <Input onChange={(text: string) => setSearchText(text)} />
      <FlatList
        style={styles.listContainer}
        data={list.filter((item: ItemType) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()),
        )}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
}

export default ListPage;
