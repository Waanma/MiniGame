import { Button, Image, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/index';
import { theme } from '../../constants';

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2014/01/mljuegos0.png?width=1200&enable=upscale',
          }}
          resizeMode="cover"
        />
        <Text style={styles.rounds}>Rounds : {rounds}</Text>
        <Text style={styles.selectedNumber}>Selected Number : {userNumber}</Text>
        <View style={styles.buttonContainer}>
          <Button color={theme.colors.black} title="Restart" onPress={onRestart} />
        </View>
      </Card>
    </View>
  );
};

export default GameOver;