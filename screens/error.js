import { StyleSheet, View, Text } from 'react-native';

export default function Error() {
  return (
    <View style={styles.container}>
      <Text>Error Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
