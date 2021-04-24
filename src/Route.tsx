import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, DetailsScreen} from './screens';
import LoginScreen from './screens/LoginScreen';
import {useAppSelector} from './redux/hooks';
import {MyTheme, MyDarkTheme, MyColors} from './utils/theme';
import {useAuth} from './services/userService';
import SplashScreen from './screens/SplashScreen';

function Route() {
  const Stack = createStackNavigator();
  const userToken = useAppSelector(state => state.auth.token);
  const isLoading = useAppSelector(state => state.auth.isLoading);

  React.useEffect(() => {
    useAuth();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

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
