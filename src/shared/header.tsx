import { StyleSheet, Text, View, Image } from 'react-native';

type titleProp = {
  title: string;
};

export default function Header({ title }: titleProp) {
  return (
    <View style={styles.headerTitle}>
      <Image
        source={require('../../assets/heart_logo.png')}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
