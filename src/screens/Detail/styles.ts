import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
  },
  content: {
    height: '100%',
    width: '100%',
  },
  image: {
    height: 250,
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'flex-end',
  },
  starIcon: {
    margin: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000000',
    marginTop: 15,
    marginBottom: 15,
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 15,
  },
  bottom: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  priceContainer: {
    width: '50%',
    flexDirection: 'column',
  },
  priceLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1d56ff',
  },
  price: { fontSize: 14, fontWeight: '800', color: '#000000' },
  button: {
    width: '50%',
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
