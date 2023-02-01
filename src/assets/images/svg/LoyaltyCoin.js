import * as React from "react";
import Svg, {
  G,
  Circle,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const LoyaltyCoin = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_51_80606)">
      <Circle cx={10} cy={10} r={10} fill="url(#paint0_linear_51_80606)" />
      <Rect
        opacity={0.7}
        x={16.7249}
        y={-6.66602}
        width={6.00875}
        height={34.5593}
        transform="rotate(35.3713 16.7249 -6.66602)"
        fill="#FFE297"
      />
      <Rect
        opacity={0.7}
        x={19.6289}
        y={0.962891}
        width={2.20871}
        height={34.6217}
        transform="rotate(35.3713 19.6289 0.962891)"
        fill="#FFE297"
      />
      <Circle
        cx={10.003}
        cy={10.0008}
        r={7.48288}
        stroke="url(#paint1_linear_51_80606)"
        strokeWidth={1.43424}
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_51_80606"
        x1={0}
        y1={0}
        x2={20}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F7DC9F" />
        <Stop offset={1} stopColor="#ECB436" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_51_80606"
        x1={3.38501}
        y1={4.16732}
        x2={15.885}
        y2={15.834}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C2AB74" />
        <Stop offset={1} stopColor="#967221" />
      </LinearGradient>
      <ClipPath id="clip0_51_80606">
        <Rect width={20} height={20} rx={10} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LoyaltyCoin;