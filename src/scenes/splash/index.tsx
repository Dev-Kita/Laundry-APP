import * as React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

function SplashScreen() {
  return (
    <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LottieView
        source={require('../../assets/animation/splash-animation.json')}
        autoPlay
        loop
      />
    </View>
  );
}

export default SplashScreen;
