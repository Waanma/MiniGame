import { StyleSheet } from 'react-native';
import {theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  title: {
    fontSize: 18,
    color: '#212121',
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: '8bit-Bold',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 5,
    textAlign: 'center',
  },
  input: {
    width: '20%',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    minWidth: 80,
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: "8bit-Bold",
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  confirmedContainer:{
    height: 150,
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  confirmedTitle:{
    fontSize: 20,
    fontFamily: "8bit-Bold",
  },
  numberContainer:{
    fontFamily: "8bit-Bold",
  }
});
