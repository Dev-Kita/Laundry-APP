import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailsScreen } from './screens';
import LoginScreen from './screens/LoginScreen';
import { MyTheme, MyDarkTheme, MyColors } from './utils/theme';
import SplashScreen from './screens/SplashScreen';
// import { useDispatch } from 'react-redux';
// import { useAppSelector } from './redux/hooks';
// import { checkAuth } from './redux/authSlice';

function Route() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('123');
  const Stack = createStackNavigator();

  React.useEffect(() => {
    setTimeout(function () {
      setIsLoading(false)
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (userToken === '' || userToken === null) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
