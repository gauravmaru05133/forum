import React from "react";
import CheckBox from '@react-native-community/checkbox';

const CheckboxComponent = ({value, onValueChange}) => {
  return (
    <CheckBox
      value={value}
      onValueChange={onValueChange}
    />
  );
};

export default CheckboxComponent;
