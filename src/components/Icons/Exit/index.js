import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V15H5V19H19V5H5V9H3V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM11 16V13H3V11H11V8L16 12L11 16Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <SvgCss xml={xml(color, size)} width="100%" height="100%" />
  </View>
);
