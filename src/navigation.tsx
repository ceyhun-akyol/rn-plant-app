import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './appStack';

function Navigation() {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="AppStack" component={AppStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
