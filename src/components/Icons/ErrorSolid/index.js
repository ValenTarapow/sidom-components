import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <SvgCss xml={xml(color, size)} width="100%" height="100%" />
  </View>
);
