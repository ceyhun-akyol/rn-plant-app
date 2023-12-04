import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    height: 152,
    borderRadius: 20,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#13231B',
    lineHeight: 21,
    marginTop: 15,
    marginBottom: 15,
    width: 100,
    marginLeft: 10,
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 15,
  },
});

export default styles;
