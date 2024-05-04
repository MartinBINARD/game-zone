import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/home';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';

const Drawer = createDrawerNavigator();

const SubDrawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <SubDrawer.Navigator options={{ headeShown: false }}>
      <SubDrawer.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <SubDrawer.Screen name="Home" component={Home} />
        <SubDrawer.Screen name="ReviewDetails" component={ReviewDetails} />
      </SubDrawer.Group>
    </SubDrawer.Navigator>
  );
}

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
            component={HomeTabs}
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
