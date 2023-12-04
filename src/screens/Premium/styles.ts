import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101E17' },
  listContainer: {
    minHeight: 130,
    maxHeight: 130,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 25,
    top: 25,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: { flex: 1, padding: 16, top: -10 },
  closeIcon: { color: '#ffffff', fontSize: 14, fontWeight: '500' },
  title: { color: '#ffffff', fontSize: 27, fontWeight: '600' },
  lower: { fontWeight: '300' },
  empty: { height: 280 },
  desc: {
    color: '#ffffff90',
    fontSize: 17,
    fontWeight: '300',
    letterSpacing: 0.38,
  },
  button: {
    backgroundColor: '#28AF6E',
    height: 52,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
    borderRadius: 14,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomDesc: {
    color: '#FFFFFF55',
    fontSize: 9,
    fontWeight: '300',
    marginTop: 8,
    width: '100%',
    textAlign: 'center',
  },
  privacyText: {
    color: '#FFFFFF55',
    fontSize: 9,
    fontWeight: '300',
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
  },
});

export default styles;
