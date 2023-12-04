import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 64,
    backgroundColor: '#24201A',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.32,
    color: '#E5C990',
  },
  desc: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.32,
    color: '#F5C25B',
  },
  icon: { margin: 15 },
  flex: { flex: 1 },
});

export default styles;
