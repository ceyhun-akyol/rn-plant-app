import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    height: 160,
  },
  flex: { flex: 1 },
  row: { flexDirection: 'row' },
  imageContainer: { height: 175, width: '100%' },
  image: { width: '100%' },
  hiMessage: { margin: 25, marginTop: 35 },
  hiText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#13231B',
  },
  hiText2: {
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    color: '#13231B',
    marginTop: 6,
  },
  title: {
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 28,
    color: '#13231B',
    marginTop: 6,
    marginLeft: 24,
  },
});

export default styles;
