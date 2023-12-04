import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 240,
    borderRadius: 12,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'flex-end',
  },
  starIcon: {
    margin: 5,
  },
  desc: {
    fontSize: 15,
    fontWeight: '400',
    color: '#ffffff',
    margin: 14,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  button: {
    width: '100%',
    height: 36,
    backgroundColor: '#2A59FE',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
