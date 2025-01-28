import React from 'react';
import { SvgCss } from 'react-native-svg';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => <SvgCss xml={xml(color, size)} />;
