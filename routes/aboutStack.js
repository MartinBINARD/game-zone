import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '../screens/about';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'About GameZone' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
