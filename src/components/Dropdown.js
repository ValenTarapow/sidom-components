import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../utils/colors';
import ChevronDown from './Icons/ChevronDown';

const DropdownComponent = ({ data, onPress, text, placeholder }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label && { color: colors.brand3 }]}>{text}</Text>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: colors.brand3 }]}
        containerStyle={styles.elements}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          onPress(item.value);
        }}
        renderRightIcon={() => <ChevronDown color={colors.brand} size={24} />}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  dropdown: {
    borderColor: colors.brand,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    padding: 2,
  },
  elements: {
    ...Platform.select({
      ios: {},
      android: {
        marginTop: -60,
      },
      default: {
        marginTop: -60,
      },
    }),
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    zIndex: 1,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.lightGrey6,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
});
