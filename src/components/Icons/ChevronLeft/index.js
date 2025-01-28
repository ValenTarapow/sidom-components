import React from 'react';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.535 3.515L7.05005 12L15.535 20.485L16.95 19.071L9.87805 12L16.95 4.929L15.535 3.515Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => <SvgCss xml={xml(color, size)} />;
