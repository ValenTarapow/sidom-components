import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18v-2h13v2Zm16.6-1-5-5 5-5L21 8.4 17.4 12l3.6 3.6ZM3 13v-2h10v2Zm0-5V6h13v2Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <SvgCss xml={xml(color, size)} width="100%" height="100%" />
  </View>
);
