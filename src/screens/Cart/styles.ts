import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { padding: 10, flex: 1 },
  listContainer: {
    height: '100%',
    flexDirection: 'column',
  },
  bottomContainer: { height: 60 },
  bottom: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  totalLabel: { fontSize: 19, fontWeight: '500', color: '#1d56ff' },
  total: { fontSize: 16, fontWeight: '700' },
  flex: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d56ff',
    borderRadius: 4,
  },
  buttonLabel: { fontSize: 25, fontWeight: '800', color: '#ffffff' },
  actionButtonLabel: { fontSize: 30, fontWeight: '800' },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a1a1a1',
  },
  countContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d56ff',
  },
  count: { fontSize: 30, fontWeight: '800', color: '#ffffff' },
  itemContainer: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
  },
  itemName: { fontSize: 19, fontWeight: '500' },
  itemPrice: { fontSize: 16, fontWeight: '500', color: '#1d56ff' },
  actionButtonGroup: { flex: 1, flexDirection: 'row' },
});

export default styles;
