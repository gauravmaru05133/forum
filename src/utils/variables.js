import { Dimensions } from "react-native";
import { responsiveSize } from "./utils";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const NUMBER_REGX = /^[0-9\b]+$/;
export const DEFAULT_COUNTRY_CODE='+91'


// font sizes
export const fontSizes = {
  mini: responsiveSize(8),
  tiny: responsiveSize(10),
  extraExtraSmall: responsiveSize(12),
  extraSmall: responsiveSize(14),
  small: responsiveSize(16),
  medium: responsiveSize(18),
  mediumLarge: responsiveSize(20),
  large: responsiveSize(22),
  extraLarge: responsiveSize(24),
  extraLarger: responsiveSize(28),
  extraExtraLarge: responsiveSize(32),
  giant: responsiveSize(36),
  iosIcons: responsiveSize(32),
  androidCloseIcon: responsiveSize(22),
  androidCheckmarkIcon: responsiveSize(26),
};

// TFArrow Font Family
export const montserratFont = {
  montserratRegular: "Montserrat-Regular",
  montserratMedium: "Montserrat-Medium",
  montserratSemiBold: "Montserrat-SemiBold",
  montserratBold:"Montserrat-Bold"
};

// TFArrow Font Family
export const tfArrowFont = {
  tfArrowFontRegular: "TFArrow-Medium",
};

// font weights use
export const fontWeights = {
    thin: '100',
    light: '300',
    book: '400',
    medium: '500',
    bold: '700',
    black: '900',
    extraBold: 'bold'
};

//use for text transform
export const textTransform = {
  none: "none",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};

//use for text align
export const textAlign = {
  auto: "auto",
  left: "left",
  right: "right",
  center: "center",
  justify: "justify",
};

//use for image resize
export const imageResize = {
  center: "center",
  contain: "contain",
  cover: "cover",
  repeat: "repeat",
  stretch: "stretch",
};

//use for date formate
export const dateOrTimeFormate = {
    ddmmyyyy: 'DD-MM-YYYY',
    ddMMMyyyy: 'DD-MMM-YYYY',
    mmDDyyyy: 'MM/DD/yyyy',
    yyyy_mm_dd: 'YYYY-MM-DD',
    yyyy_mm_dd_hh_mm_a: 'YYYY-MM-DD hh:mm a',
    hh_mm_a: 'hh:mm a',
    hh_mm: "HH:mm"
}

// date time picker mode
export const DATE_TIME_MODE = {
    TIME: 'time',
    DATE: 'date',
    DATE_TIME: 'datetime' //ios only
}

//flash message type
export const flashMsgType={
  danger:'danger',
  default:'default',
  info:'info',
  none:'none',
  success:'success',
  warning:'warning'
}
