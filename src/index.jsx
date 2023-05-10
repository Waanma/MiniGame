import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { Game, GameOver, StartGame } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [loaded] = useFonts({
    'foldit': require('../assets/fonts/Foldit-VariableFont_wght.ttf'),
    '8bit-Bold': require('../assets/fonts/8bitOperatorPlus8-Bold.ttf')
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
  }

  const headerTitle = userNumber ? 'Game' : 'Welcome';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <Game userNumber={userNumber} onGameOver={onGameOver} />;
    }

    if (guessRounds > 0) {
      return <GameOver rounds={guessRounds} onRestart={onRestart} userNumber={userNumber} />;
    }

    return <StartGame onStartGame={onStartGame} />
  };
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}