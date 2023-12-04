/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import ListPage from './screens/List';
import IntroPage from './screens/Intro';
import PremiumPage from './screens/Premium';

// assets
import HomeIcon from './resources/icons/HomeIcon.png';
import DiagnoseIcon from './resources/icons/DiagnoseIcon.png';
import ScanButtonIcon from './resources/icons/ScanButtonIcon.png';
import MyGardenIcon from './resources/icons/MyGardenIcon.png';
import ProfileIcon from './resources/icons/ProfileIcon.png';

export type RootStackParamList = {
  List: undefined;
  Intro: undefined;
  Premium: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const iconStyle = { height: 28, width: 28 };
const tabBarLabelStyle = { top: -4 };

function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={(props: any) => <ListPage {...props} />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={HomeIcon} />,
          title: 'Home',
          tabBarLabelStyle: { ...tabBarLabelStyle, color: '#28AF6E' },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={() => <View />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={DiagnoseIcon} />,
          title: 'Diagnose',
          tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="QR"
        component={() => <View />}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{ height: 64, width: 74, top: -10 }}
              source={ScanButtonIcon}
            />
          ),
          title: '',
          tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Star"
        component={() => <View />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={MyGardenIcon} />,
          title: 'My Garden',
          tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <View />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={ProfileIcon} />,
          title: 'Profile',
          tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        headerShadowVisible: false,
        navigationBarColor: '#fffff',
        statusBarColor: '#fffff',
      }}>
      <Stack.Screen
        name="List"
        component={TabsNavigation}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Intro"
        component={IntroPage}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name="Premium"
        component={PremiumPage}
        options={{ title: '', headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
