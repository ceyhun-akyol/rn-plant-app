import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center', flex: 1 },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#13231B',
  },
  subTitle: { fontSize: 16, fontWeight: '400', color: '#21332a' },
  titleContainer: { width: '100%', marginLeft: 20, marginRight: 20 },
  button: {
    height: 58,
    width: '100%',
    margin: 24,
    backgroundColor: '#28AF6E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: { color: '#ffffff' },
  subInfo: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    color: '#597165',
    width: '60%',
  },
  flex: { flex: 1 },
  imageContainer: { flex: 1, margin: 30 },
  image: { flex: 1 },
});

export default styles;
