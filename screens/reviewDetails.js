import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});