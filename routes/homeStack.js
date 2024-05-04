import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group
        screenOptions={{
          headerTintColor: '#444',
          headerStyle: { backgroundColor: '#eee', height: 60 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'GameZone' }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{ title: 'Review Details' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
