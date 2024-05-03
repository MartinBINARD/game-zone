import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Group
          screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#eee', height: 60 },
          }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ title: 'GameZone' }}
          />
          <Drawer.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{ title: 'Review Details' }}
          />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
