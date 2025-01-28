import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import ArrowBack from './Icons/ArrowBack';

const ButtonBack = ({
  onSelect,
  disabled,
  color = colors.defaultBrand2,
  size = 24,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSelect} disabled={disabled}>
        <ArrowBack color={color} size={size} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBack;
