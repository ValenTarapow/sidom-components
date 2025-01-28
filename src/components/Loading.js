import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export default function Loading({
  withBackground = false,
  color = colors.defaultBrand1,
}) {
  return (
    <View
      style={withBackground ? styles.wrapperWithBackground : styles.wrapper}
    >
      <ActivityIndicator size="large" color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperWithBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.loadingGrey,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    marginTop: 20,
  },
});
