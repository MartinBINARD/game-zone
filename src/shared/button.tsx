import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type FlatButtonProps = {
  testID: string;
  text: string;
  onPress: (e: GestureResponderEvent) => void;
};

export default function FlatButton({ testID, text, onPress }: FlatButtonProps) {
  return (
    <TouchableOpacity testID={testID} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
