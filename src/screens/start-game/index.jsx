import React, { useState } from 'react';
import { Text, TextInput, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { styles } from './styles';
import { Card, Header, NumberContainer } from '../../components/index';

const StartGame = ({onStartGame}) => {
  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''));
  }

  const onHandlerConfirm = () => {
    const choosenNumer = Number(numberOption);
    if (isNaN(choosenNumer) || choosenNumer <= 0 || choosenNumer > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [{ text: "Okay", style: "destructive", onPress: () => setNumberOption('') },]);
    } else {
      setConfirmed(true);
      setSelectedNumber(choosenNumer);
      setNumberOption('');
    }
  };

  const onHandlerReset = () => {
    setNumberOption('');
    setConfirmed(false);
    setSelectedNumber(null);
  };

  const onHandlerStartGame = () => {
    onStartGame(selectedNumber);
  };

  const Confirmed = () => confirmed ? (
    <Card style={styles.confirmedContainer}>
      <Text style={styles.confirmedTitle}>Selected Number</Text>
      <NumberContainer number={selectedNumber}/>
      <Button title='Start Game' onPress={onHandlerStartGame} color='green'>Continuar</Button>
    </Card>
  ) : null;


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Whrite a number</Text>
          <TextInput
            style={styles.input}
            placeholder='0'
            keyboardType='number-pad'
            maxLength={2}
            autoCapitalize='none'
            autoCorrect={false}
            blurOnSubmit
            onChangeText={onHandlerChangeText}
            value={numberOption}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Clear"
              onPress={onHandlerReset}
              color='red'
            />
            <Button
              title="Confirm"
              onPress={onHandlerConfirm}
              color='#80FF72'
              disabled={numberOption === ""}
            />
          </View>
        </Card>
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default StartGame;