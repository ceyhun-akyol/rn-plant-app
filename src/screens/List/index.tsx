/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Input from '@components/Input';
import Card from '@components/Card';
import Button from '@components/Button';
import { getCategory } from '@store/categories/actions';
import { getQuestions } from '@store/questions/actions';
import { selectQuestions } from '@store/questions/selectors';
import { selectCategories } from '@store/categories/selectors';
import { CategoryType } from 'src/types';
import QuestionCard from '@components/QuestionCard';
import { selectSettings } from '@store/settings/selectors';
import { RootStackParamList } from '../../appStack';

import HomeBackground from '../../resources/HomeBackground.png';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'List', 'AppStack'>;

function ListPage({ navigation }: Props): JSX.Element {
  const dispatch = useDispatch();
  const questions = useSelector(selectQuestions);
  const categories = useSelector(selectCategories);
  const settings = useSelector(selectSettings);
  const [searchText, setSearchText] = React.useState('');

  React.useEffect(() => {
    dispatch(getCategory({}));
    dispatch(getQuestions({}));
  }, []);

  React.useEffect(() => {
    if (!settings.introPageShown) navigation.push('Intro');
    else if (!settings.premiumShown) navigation.push('Premium');
  }, [settings]);

  const groupedList = (array: CategoryType[]) => {
    const returnList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 1) {
        returnList.push([array[i - 1], array[i]]);
      }
    }

    return returnList;
  };

  // eslint-disable-next-line no-underscore-dangle
  const _renderItem = (items: CategoryType[]) => (
    <View style={styles.row}>
      {items.map((item) => (
        <Card key={`${item.id}`} {...item} />
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={HomeBackground}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.hiMessage}>
          <Text style={styles.hiText}>Hi, plant lover!</Text>
          <Text style={styles.hiText2}>Good Afternoon! ⛅</Text>
          <Input onChange={(text: string) => setSearchText(text)} />
        </View>
      </ImageBackground>
      {searchText.length === 0 && (
        <>
          <Button />
          <Text style={styles.title}>Get Started</Text>
          <FlatList
            style={styles.listContainer}
            data={questions}
            horizontal
            renderItem={({ item }) => <QuestionCard {...item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingRight: 50 }}
          />
        </>
      )}
      {groupedList(
        categories.filter((item: CategoryType) =>
          item.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()),
        ),
      ).map(_renderItem)}
    </ScrollView>
  );
}

export default ListPage;
