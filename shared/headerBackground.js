import { ImageBackground, StyleSheet } from 'react-native';

export default function HeaderBackground() {
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.headerBackground}
    />
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
