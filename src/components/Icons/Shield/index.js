import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
<svg xmlns="http://www.w3.org/2000/svg" height=${size} width=${size} viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill=${color} d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
`;

export default ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <SvgCss xml={xml(color, size)} width="100%" height="100%" />
  </View>
);
