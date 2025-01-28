import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../utils/colors';
import { getFont } from '../utils/fonts';

export default function Button(props) {
  const { loading, text, onPress, color = 'blue' } = props;

  const getButtonText = () => {
    return loading ? (
      <ActivityIndicator color={colors.white} style={styles.loading} />
    ) : (
      text
    );
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: color }]}
      disabled={loading}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{getButtonText()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    ...Platform.select({
      ios: {
        height: 45,
      },
      android: {
        height: 45,
      },
      default: {
        height: 48,
      },
    }),
  },
  text: {
    ...getFont('Nunito', '700'),
    color: colors.white,
    fontSize: 14,
    letterSpacing: 0.2,
    zIndex: 1,
    textTransform: 'uppercase',
  },
  loading: {
    zIndex: 1,
  },
});
