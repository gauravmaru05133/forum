import { Switch } from "react-native";
import React from "react";
import colors from "../../utils/colors";

const SwitchComponent = ({ onValueChange, value, isEnabled }) => {
  return (
    <Switch
      onValueChange={onValueChange}
      value={value}
      trackColor={{ false: colors.greyTextColor, true: colors.offWhite }}
      thumbColor={isEnabled ? colors.buttonPrimary : colors.offWhite}
    />
  );
};

export default SwitchComponent;
