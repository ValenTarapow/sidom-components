import React from 'react';
import { SvgCss } from 'react-native-svg';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => <SvgCss xml={xml(color, size)} />;
