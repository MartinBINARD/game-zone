import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStackNavigator from './homeStack';
import About from '../screens/about';
import Header from '../shared/header';
import HeaderBackground from '../shared/headerBackground';

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="GameZone">
        <Drawer.Group
          screenOptions={{
            headerTitle: () => <Header title="GameZone" />,
            headerBackground: () => <HeaderBackground />,
          }}
        >
          <Drawer.Screen
            name="Gamezone"
            component={HomeStackNavigator}
            title="GameZone"
          />
          <Drawer.Screen name="About" component={About} title="About" />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
