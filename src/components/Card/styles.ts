import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '50%',
    borderRadius: 20,
    flexDirection: 'column',
  },
  image: {
    height: 150,
    width: 150,
    backgroundColor: 'gray',
    alignItems: 'flex-end',
  },
  starIcon: {
    margin: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2A59FE',
    marginTop: 15,
    marginBottom: 15,
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 15,
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
