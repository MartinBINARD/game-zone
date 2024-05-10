import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackNavigatorParamsList } from 'src/@types/react-navigation';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamsList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Games list' }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{ title: 'Review Details' }}
      />
    </Stack.Navigator>
  );
}
