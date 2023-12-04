/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// eslint-disable-next-line import/no-unresolved
import Header from '@components/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@store/cart/selectors';

// screens
import ListPage from './screens/List';
import DetailPage from './screens/Detail';
import CartPage, { CartItemType } from './screens/Cart';

// assets
import HomeIcon from './resources/icons/home.png';
import CartIcon from './resources/icons/cart.png';
import Star3Icon from './resources/icons/star3.png';
import ProfileIcon from './resources/icons/profile.png';

export type RootStackParamList = {
  List: undefined;
  ListDetail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const iconStyle = { height: 28, width: 28 };

function TabsNavigation() {
  const cartList = useSelector(selectCartItems);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={(props: any) => <ListPage {...props} />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={HomeIcon} />,
          title: '',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <ImageBackground
              style={{ ...iconStyle, alignItems: 'flex-end' }}
              source={CartIcon}>
              {cartList.length ? (
                <View
                  style={{
                    backgroundColor: 'red',
                    height: 22,
                    width: 22,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                    }}>{`${cartList.length}`}</Text>
                </View>
              ) : (
                ''
              )}
            </ImageBackground>
          ),
          title: '',
        }}
      />
      <Tab.Screen
        name="Star"
        component={() => <View />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={Star3Icon} />,
          title: '',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <View />}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image style={iconStyle} source={ProfileIcon} />,
          title: '',
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
        headerShadowVisible: true,
        statusBarColor: '#1d56ff',
        navigationBarColor: '#1d56ff',
        header: Header,
      }}>
      <Stack.Screen
        name="List"
        component={TabsNavigation}
        options={{ title: "User's Lists" }}
      />
      <Stack.Screen
        name="ListDetail"
        component={DetailPage}
        options={{ title: 'User Detail' }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
