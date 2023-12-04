import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { shownIntro } from '@store/settings/actions';
import { RootStackParamList } from '../../appStack';

import Frame13 from '../../resources/Frame_13.png';
import IosCase from '../../resources/IosCase.png';
import IosCase2 from '../../resources/IosCase2.png';

import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'List', 'AppStack'>;

function IntroPage({ navigation }: Props): JSX.Element {
  const [step, setStep] = React.useState(0);
  const dispatch = useDispatch();

  // eslint-disable-next-line consistent-return
  const getImageResource = () => {
    switch (step) {
      case 0:
        return Frame13;
      case 1:
        return IosCase;
      case 2:
        return IosCase2;
      default:
        break;
    }
  };

  const renderTitle = () => {
    switch (step) {
      case 0:
        return (
          <View style={{ width: '100%' }}>
            <Text style={styles.title}>Welcome to PlantApp</Text>
            <Text style={styles.subTitle}>
              Identify more than 3000+ plants and 88% accuracy.
            </Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Take a photo to identify the plant!
            </Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Get plant care guides</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const onPressNext = () => {
    if (step === 2) {
      dispatch(shownIntro({}));
      navigation.popToTop();
    } else {
      setStep((step + 1) % 3);
    }
  };

  return (
    <View style={styles.container}>
      {renderTitle()}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={getImageResource()} />
      </View>
      <Pressable style={styles.button} onPress={onPressNext}>
        <Text style={styles.buttonText}>
          {step === 0 ? 'Get Started' : 'Continue'}
        </Text>
      </Pressable>
      {step === 0 && (
        <Text style={styles.subInfo}>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy
          Policy.
        </Text>
      )}
    </View>
  );
}

export default IntroPage;
