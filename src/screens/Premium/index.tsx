import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { selectQuestions } from '@store/questions/selectors';
import PremiumFeatureCard from '@components/PremiumFeatureCard';
import RadioButton from '@components/RadioButton';
import { shownPremium } from '@store/settings/actions';
import { RootStackParamList } from '../../appStack';

import PayWall from '../../resources/PayWall.png';

import styles from './styles';

const FEATURES = [
  {
    icon: 'UnlimitedIcon',
    title: 'Unlimited',
    desc: 'Plant Identify',
  },
  {
    icon: 'FasterIcon',
    title: 'Faster',
    desc: 'Process',
  },
  {
    icon: 'UnlimitedIcon',
    title: 'Unlimited',
    desc: 'Plant Identify',
  },
];

type Props = NativeStackScreenProps<RootStackParamList, 'List', 'AppStack'>;

function PremiumPage({ navigation }: Props): JSX.Element {
  const [selectedOption, setSelectedOption] = React.useState(1);
  const dispatch = useDispatch();

  const onPressCloseButton = () => {
    dispatch(shownPremium({}));
    navigation.popToTop();
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={PayWall}
        style={styles.imageBackground}
        imageStyle={{ height: 500 }}>
        <Pressable onPress={onPressCloseButton} style={styles.closeButton}>
          <Text style={styles.closeIcon}>X</Text>
        </Pressable>
        <View style={styles.empty} />
        <Text style={styles.title}>
          PlantApp <Text style={styles.lower}>Premium</Text>
        </Text>
        <Text style={styles.desc}>Access All Features</Text>
        <FlatList
          style={styles.listContainer}
          data={FEATURES}
          horizontal
          renderItem={({ item }) => <PremiumFeatureCard {...item} />}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingRight: 50 }}
        />
        <View>
          <RadioButton
            onPress={() => setSelectedOption(0)}
            {...{
              title: '1 Month',
              desc: '$2.99/month, auto renewable',
              selected: selectedOption === 0,
            }}
          />
          <RadioButton
            onPress={() => setSelectedOption(1)}
            key="sad324"
            {...{
              title: '1 Year',
              desc: 'First 3 days free, then $529,99/year',
              selected: selectedOption === 1,
            }}
          />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Try free for 3 days</Text>
          </Pressable>

          <Text style={styles.bottomDesc}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>

          <Text style={styles.privacyText}>Terms • Privacy • Restore</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

export default PremiumPage;
