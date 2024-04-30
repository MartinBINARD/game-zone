import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('John');
  const [person, setPerson] = useState({ name: 'Mario', age: 40 });

  const clickHandler = () => {
    setName('Bob');
    setPerson({ name: 'Luigi', age: 45 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>My name is {name}</Text>
        <Text>
          His name is {person.name} and his age is {person.age}
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Click me" onPress={clickHandler} />
        </View>
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
});
