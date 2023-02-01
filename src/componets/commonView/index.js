import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import colors from "../../utils/colors";

const CommonView = ({ children, style, contentContainerStyle,scrollContainer }) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView
      nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[contentContainerStyle]}
        style={[styles.scrollContainer, scrollContainer]}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  scrollContainer: {
    flexDirection: "column",
    flexGrow: 1,
  },
});

export default CommonView;
