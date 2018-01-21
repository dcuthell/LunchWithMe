import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b3f4'
  },
  header: {
    fontSize: 30,
  },
  accountInput: {},
  input: {
    width: 300,
    fontSize: 18,
    fontFamily: 'Avenir',
    color: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: .3,
    textAlign: 'center'  },
  footer: {
    fontSize: 30,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  },
  create: {
    width: 300,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: .3,
    textAlign: 'center'
  },
  checkbox: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  }
});

export default styles;
