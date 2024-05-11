import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerStackNavigatorParamsList } from 'src/@types/react-navigation';

import HomeStackNavigator from './homeStack';
import About from '../screens/about';
import Header from '../shared/header';
import HeaderBackground from '../shared/headerBackground';

const Drawer = createDrawerNavigator<DrawerStackNavigatorParamsList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Group
          screenOptions={{
            headerTitle: () => <Header title="GameZone" />,
            headerBackground: () => <HeaderBackground />,
          }}
        >
          <Drawer.Screen name="Gamezone" component={HomeStackNavigator} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
