import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from './screens';
import LoginScreen from './screens/LoginScreen';
import {useAppSelector} from './redux/hooks';
import {MyTheme, MyDarkTheme, MyColors} from './utils/theme';

const Stack = createStackNavigator();
function Route() {
  const userToken = useAppSelector(state => state.user.token);

  if (userToken === '' || userToken === null) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer theme={MyDarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
