import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [age, setAge] = useState('35');

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>Enter a name</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. John Doe"
          onChangeText={(value) => setName(value)}
        />
        <Text>Enter a name</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. 35"
          onChangeText={(value) => setAge(value)}
        />
        <Text>
          Name : {name}, Age : {age}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
