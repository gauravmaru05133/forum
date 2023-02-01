import { useRef } from "react";
import { View, Image, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { deviceWidth } from "../../utils/variables";
import ScratchMask from "../../utils/json/scratchCardMask";

const CommonSlider = ({ data }) => {
  const carouselRef = useRef(null);

  return (
    <View style={{ width: deviceWidth }}>
      <Carousel
      layout={'default'}
    // useScrollView={false}
    // loop={true}
        ref={carouselRef}
        data={ScratchMask}
        renderItem={(item, index) => {
          console.log("Item", item);
          return (
            <>
              <Image source={require('../../assets/images/scratchMask/mask_1.png')} />
            </>
          );
        }}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth * 0.6}
      />
    </View>
  );
};

export default CommonSlider;
