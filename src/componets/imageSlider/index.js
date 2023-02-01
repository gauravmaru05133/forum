import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import images from "../../assets/images";
import foodImageCatSlider from "../../utils/json/imageSlider.json";
import {
  deviceHeight,
  deviceWidth,
  fontSizes,
  textTransform,
} from "../../utils/variables";
import AppImage from "../image/AppImage";
import LinearGradient from "react-native-linear-gradient";
import colors from "../../utils/colors";
import SvgComponent from "../svgIcon/SvgComponent";
import fonts from "../../assets/fonts";

const ImageSlider = ({ width, height, itemWidth, itemHeight, isDetailsEnable,data }) => {
  const carouselRef = useRef(null);
  const [iWidth, setIWidth] = useState(
    itemWidth ? itemWidth : deviceWidth * 0.6
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (foodImageCatSlider.length > 1) {
      setIWidth(itemWidth ? itemWidth : deviceWidth - deviceWidth * 0.15);
    } else {
      setIWidth(deviceWidth * 0.9);
    }
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: "100%", height: "100%", paddingHorizontal: 5 }}>
        <AppImage
          style={{ width: "100%", height: "100%" }}
          source={images.foodMenuSlider}
        />
        {isDetailsEnable && (
          <View style={styles().gradientContainer}>
            <LinearGradient
              colors={[
                "rgba(0,0,0,0)",
                "rgba(0,0,0,0.3)",
                "rgba(0,0,0,0.7)",
                "rgba(0,0,0,0.9)",
              ]}
              style={{ width: "100%", height: "100%" }}
            />
            <View style={styles().gradientTxt}>
              <SvgComponent
                id={item.icon}
                iconColor={colors.white}
                height={30}
                width={30}
              />
              <Text style={styles().catTxt}>{item.title}</Text>
            </View>
          </View>
        )}

      </View>
    );
  };

  return (
    <View>
      <View
        style={
          styles({
            width,
            height,
          }).container
        }
      >
        <Carousel
          //loop
          ref={carouselRef}
          layout="default"
          data={data}
          renderItem={renderItem}
          sliderWidth={deviceWidth}
          itemWidth={iWidth}
          inactiveSlideScale={1}
          onSnapToItem={(index) => setActiveSlide(index)}
          ItemSeparatorComponent={() => {
            return <View style={styles().sliderDivider} />;
          }}
        />
      </View>
      <View style={styles().indicatorContainer}>
        {foodImageCatSlider.map((item, index) => {
          return (
            <View
              key={index}
              style={styles({ activeSlide, index }).indicator}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = (props = {}) =>
  StyleSheet.create({
    container: {
      width: props?.width ? props?.width : deviceWidth,
      height: props?.height ? props?.height : deviceHeight * 0.40,
    },
    slider: {
      width: props?.width ? props?.width : deviceWidth * 0.65,
      height: props?.height ? props?.height : deviceHeight * 0.35,
    },
    gradientContainer: {
      width: "100%",
      height: 150,
      position: "absolute",
      bottom: 0,
    },
    gradientTxt: {
      flexDirection: "row",
      position: "absolute",
      bottom: 5,
      alignItems: "center",
    },
    catTxt: {
      color: colors.white,
      fontFamily: fonts.MontserratRegular,
      textTransform: textTransform.uppercase,
      fontSize: fontSizes.extraExtraSmall,
    },
    sliderDivider: {
      marginLeft: 0,
      marginRight: 0,
    },
    indicator: {
      width: 32,
      height: 2,
      backgroundColor: props.activeSlide == props.index ? "#003549" : "#B8C7CD",
      marginRight: 10,
    },
    indicatorContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 12,
    },
  });
export default ImageSlider;
