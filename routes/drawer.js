import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStackNavigator from './homeStack';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeTabs">
        <Drawer.Group
          screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#eee', height: 60 },
          }}
        >
          <Drawer.Screen
            name="HomeTabs"
            component={HomeStackNavigator}
            options={{ title: 'GameZone' }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{ title: 'About' }}
          />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
