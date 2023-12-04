import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { selectDetail } from '@store/list/selectors';
import { ItemType } from 'src/screens/List';

import BackIcon from '../../resources/icons/back.png';

import styles from './styles';

function Header(props: NativeStackHeaderProps) {
  const detail: ItemType = useSelector(selectDetail);

  const [state, setState] = React.useState({
    title: '',
    backButton: false,
  });

  React.useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    switch (props.route.name) {
      case 'List':
        setState({
          title: 'E-Market',
          backButton: false,
        });
        break;
      case 'ListDetail':
        setState({
          title: detail.name,
          backButton: true,
        });
        break;

      default:
        break;
    }
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.route.name, detail]);

  const onPressBack = () => {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.navigation.canGoBack()) {
      // eslint-disable-next-line react/destructuring-assignment
      props.navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {state.backButton && (
        <Pressable onPress={onPressBack}>
          <Image source={BackIcon} style={styles.icon} />
        </Pressable>
      )}
      <Text style={styles.title}>{state.title}</Text>
    </View>
  );
}

export default Header;
