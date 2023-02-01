import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SpinKnob = (props) => (
  <Svg
    width={46}
    height={42}
    viewBox="0 0 46 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_51_79718)">
      <Path
        d="M22.928 3.91797L39.0572 31.8546H6.79873L22.928 3.91797Z"
        fill="#FF4700"
      />
      <Path
        d="M8.81488 30.6906L22.928 6.24602L37.041 30.6906H8.81488Z"
        stroke="black"
        strokeOpacity={0.1}
        strokeWidth={2.32805}
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SpinKnob;