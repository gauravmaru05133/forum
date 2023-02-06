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
import Constant from "../../constant";
import colors from "../../utils/colors";
import Bottom from "../../utils/json/bottom.json";
import { navigationToScreen } from "../../utils/navigations";
import screenName from "../../utils/screenName";
import { deviceWidth, fontSizes } from "../../utils/variables";

const Tabbar = ({ state, descriptors, navigation }) => {
  const [tab, setTab] = useState(0);
  const [footer, setFooter] = useState([]);
  const [tabBarShow, setTabBarShow] = useState(true)
  const screenNameState = useSelector((state) => state.screenNameReducer.screenName);


  useEffect(() => {
    setFooter(Bottom);
  }, []);

  useEffect(() => {
    console.log("kkkkkkkkkkkkkkkk 1111", screenName)
    if (screenNameState == screenName.FEED_MEDIA_DETAILS) {
      setTabBarShow(false)
      console.log("kkkkkkkkkkkkkkkk ", screenNameState)
    } else {
      setTabBarShow(true)
    }

  }, [screenNameState])

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
    <View style={styles({
      tabBarShow
    }).container}>
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
      display: props?.tabBarShow ? 'flex' : 'none'
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
