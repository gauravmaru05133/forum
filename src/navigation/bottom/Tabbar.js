import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import fonts from "../../assets/fonts";
import SvgComponent from "../../componets/svgIcon/SvgComponent";
import TabCell from "../../componets/tabCell";
import colors from "../../utils/colors";
import Bottom from "../../utils/json/bottom.json";
import { navigationToScreen } from "../../utils/navigations";
import screenName from "../../utils/screenName";
import { deviceWidth, fontSizes } from "../../utils/variables";

const Tabbar = ({ state, descriptors, navigation }) => {
  const [tab, setTab] = useState(0);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    setFooter(Bottom);
  }, []);

  const goToScreen = (index) => {
    switch (index) {
      case 1:
        navigationToScreen(screenName.HOME);
        break;
      case 3:
        navigationToScreen(screenName.OFFERLIST);
        break;
      case 4:
        navigationToScreen(screenName.LOYALTYHUB);
    }
  };

  return (
    <View style={styles().container}>
      {footer.map((item, index) => {
        return (
          <TouchableOpacity
            //key={index}
            style={styles().childContainer}
            onPress={() => {
              setTab(index);
              goToScreen(item?.id);
            }}
          >
            <SvgComponent
              id={tab == index ? item.iconSelect : item.iconUnselect}
              iconColor={
                tab == index ? colors.txt_color : colors.disable_txt_color
              }
            />

            <Text style={styles({ tab, index }).tabTxt}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = (props = {}) =>
  StyleSheet.create({
    divider: {
      width: 1,
      height: 100,
      backgroundColor: colors.black,
    },
    container: {
      width: "100%",
      height: 64,
      justifyContent: "space-evenly",
      flexDirection: "row",
      alignItems: "center",
    },
    childContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      marginBottom: 10,
      flex: 1,
    },
    tabTxt: {
      fontFamily:
        props.tab == props.index
          ? fonts.MontserratSemiBold
          : fonts.MontserratRegular,
      color:
        props.tab == props.index ? colors.txt_color : colors.disable_txt_color,
      fontSize: fontSizes.extraExtraSmall,
      marginTop: -4,
      textTransform: "uppercase",
    },
  });
export default Tabbar;
