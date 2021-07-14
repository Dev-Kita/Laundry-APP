import React from 'react';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

// will be delete, move into styles folder
export const MyColors = {
  gray1: 'rgba(51, 51, 51, 1)',
  gray2: 'rgba(79, 79, 79, 1)',
  gray3: 'rgba(130, 130, 130, 1)',
  gray4: 'rgba(189, 189, 189, 1)',
  gray5: 'rgba(224, 224, 224, 1)',
  gray6: 'rgba(242, 242, 242, 1)',
  red: 'rgba(235, 87, 87, 1)',
  blue1: 'rgba(47, 128, 237, 1)',
  blue2: 'rgba(45, 156, 219, 1)',
  blue3: 'rgba(86, 204, 242, 1)',
};

export const MyDarkTheme = {
  ...DarkTheme,
};

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F3F4F8',
    primary: '#258CD0',
    primary1: '#60A8D8',
    secondry: '#CBE5F6',
    text: '#4F4F4F',
    card: '#FFFFFF',
    danger: '#EB3F33',
  },
};
