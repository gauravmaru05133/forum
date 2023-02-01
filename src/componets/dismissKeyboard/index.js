import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
export default HideKeyboard