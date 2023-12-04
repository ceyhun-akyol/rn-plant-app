import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: '100%',
    height: 60,
    borderRadius: 14,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ffffff50',
    backgroundColor: '#FFFFFF10',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    borderRadius: 12,
    paddingLeft: 16,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  desc: {
    color: '#FFFFFF70',
    fontWeight: '400',
    fontSize: 11,
    marginTop: 4,
  },
});

export default styles;
