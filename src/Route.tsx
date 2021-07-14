import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoginScreen, DetailScreen, SplashScreen } from './scenes';
import { MyTheme, MyDarkTheme, MyColors } from './utils/theme';
import { ContextAuth } from './context/ContextAuth'

function Route() {

  const { state: AuthState } = React.useContext(ContextAuth);
  const [isLoading, setIsLoading] = React.useState(true);
  const Stack = createStackNavigator();

  React.useEffect(() => {
    setTimeout(function () {
      setIsLoading(false)
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (AuthState.token === null) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
