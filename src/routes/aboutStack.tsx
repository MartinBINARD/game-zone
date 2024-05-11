import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AboutStackParamList } from 'src/@types/react-navigation';

import About from '../screens/about';

const Stack = createNativeStackNavigator<AboutStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'About GameZone' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
