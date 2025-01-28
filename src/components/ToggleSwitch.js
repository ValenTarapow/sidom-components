import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { getFont } from '../utils/fonts';
import { colors } from '../utils/colors';

export default function ToggleSwitch({
  onToggle,
  text,
  initialValue = false,
  trackColorChecked = colors.defaultBrand1,
  trackColorUnchecked = colors.lightGrey1,
  thumbColorChecked = colors.white,
  thumbColorUnchecked = colors.white,
  color = colors.defaultBrand1,
}) {
  const [value, setValue] = useState(initialValue);
  const onChange = () => {
    const newValue = !value;
    setValue(newValue);
    onToggle(newValue);
  };

  return (
    <View style={styles.wrapper}>
      <Switch
        onValueChange={onChange}
        value={value}
        trackColor={{ false: trackColorUnchecked, true: trackColorChecked }}
        thumbColor={value ? thumbColorChecked : thumbColorUnchecked}
      />
      <Text style={[styles.info, { color: color }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    paddingLeft: 5,
    fontSize: 14,
    ...getFont('Nunito', '700'),
  },
});
