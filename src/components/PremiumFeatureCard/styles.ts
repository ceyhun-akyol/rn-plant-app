import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 156,
    height: 130,
    borderRadius: 12,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#FFFFFF10',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20,
    marginTop: 10,
  },
  desc: {
    color: '#FFFFFF70',
    fontWeight: '400',
    fontSize: 13,
    marginTop: 4,
  },
});

export default styles;
