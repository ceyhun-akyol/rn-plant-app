import React from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Image,
} from 'react-native';

import SearchIcon from '../../resources/icons/search.png';

import styles from './styles';

type InputProps = {
  onChange: (text: string) => void;
};

function Input(props: InputProps) {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    props?.onChange(text);
  }, [props, text]);

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
    setText(e.nativeEvent.text);

  return (
    <View style={styles.container}>
      <Image source={SearchIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        value={text}
        onChange={onChange}
        placeholder="Search"
      />
    </View>
  );
}

export default Input;
