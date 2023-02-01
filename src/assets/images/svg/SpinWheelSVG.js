import * as React from "react";
import Svg, { Circle, Mask, Path, G, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SpinWheelSVG = (props) => (
  <Svg
    width={136}
    height={138}
    viewBox="0 0 136 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={67.9637} cy={69.0365} r={67.0365} fill="#C4C4C4" />
    <Mask id="path-2-inside-1_51_79214" fill="white">
      <Path d="M135 69.0365C135 83.1932 130.518 96.9865 122.197 108.44L67.9637 69.0365H135Z" />
    </Mask>
    <Path
      d="M135 69.0365C135 83.1932 130.518 96.9865 122.197 108.44L67.9637 69.0365H135Z"
      fill="#671DA1"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-2-inside-1_51_79214)"
    />
    <Mask id="path-3-inside-2_51_79214" fill="white">
      <Path d="M122.197 108.44C113.876 119.893 102.143 128.417 88.6791 132.792L67.9637 69.0365L122.197 108.44Z" />
    </Mask>
    <Path
      d="M122.197 108.44C113.876 119.893 102.143 128.417 88.6791 132.792L67.9637 69.0365L122.197 108.44Z"
      fill="white"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-3-inside-2_51_79214)"
    />
    <Mask id="path-4-inside-3_51_79214" fill="white">
      <Path d="M88.6791 132.792C75.2153 137.167 60.7121 137.167 47.2483 132.792L67.9637 69.0365L88.6791 132.792Z" />
    </Mask>
    <Path
      d="M88.6791 132.792C75.2153 137.167 60.7121 137.167 47.2483 132.792L67.9637 69.0365L88.6791 132.792Z"
      fill="#DB4646"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-4-inside-3_51_79214)"
    />
    <Mask id="path-5-inside-4_51_79214" fill="white">
      <Path d="M47.2483 132.792C33.7845 128.417 22.0512 119.893 13.7301 108.44L67.9637 69.0365L47.2483 132.792Z" />
    </Mask>
    <Path
      d="M47.2483 132.792C33.7845 128.417 22.0512 119.893 13.7301 108.44L67.9637 69.0365L47.2483 132.792Z"
      fill="white"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-5-inside-4_51_79214)"
    />
    <Mask id="path-6-inside-5_51_79214" fill="white">
      <Path d="M13.7301 108.44C5.40896 96.9865 0.927237 83.1932 0.927238 69.0365L67.9637 69.0365L13.7301 108.44Z" />
    </Mask>
    <Path
      d="M13.7301 108.44C5.40896 96.9865 0.927237 83.1932 0.927238 69.0365L67.9637 69.0365L13.7301 108.44Z"
      fill="#1C7CD4"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-6-inside-5_51_79214)"
    />
    <Mask id="path-7-inside-6_51_79214" fill="white">
      <Path d="M0.927238 69.0365C0.92724 54.8797 5.40896 41.0864 13.7301 29.6334L67.9637 69.0365L0.927238 69.0365Z" />
    </Mask>
    <Path
      d="M0.927238 69.0365C0.92724 54.8797 5.40896 41.0864 13.7301 29.6334L67.9637 69.0365L0.927238 69.0365Z"
      fill="white"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-7-inside-6_51_79214)"
    />
    <Mask id="path-8-inside-7_51_79214" fill="white">
      <Path d="M13.7301 29.6334C22.0512 18.1804 33.7845 9.65566 47.2483 5.281L67.9637 69.0365L13.7301 29.6334Z" />
    </Mask>
    <Path
      d="M13.7301 29.6334C22.0512 18.1804 33.7845 9.65566 47.2483 5.281L67.9637 69.0365L13.7301 29.6334Z"
      fill="#FFC130"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-8-inside-7_51_79214)"
    />
    <Mask id="path-9-inside-8_51_79214" fill="white">
      <Path d="M47.2483 5.281C60.7121 0.906333 75.2153 0.906333 88.6791 5.281L67.9637 69.0365L47.2483 5.281Z" />
    </Mask>
    <Path
      d="M47.2483 5.281C60.7121 0.906333 75.2153 0.906333 88.6791 5.281L67.9637 69.0365L47.2483 5.281Z"
      fill="white"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-9-inside-8_51_79214)"
    />
    <Mask id="path-10-inside-9_51_79214" fill="white">
      <Path d="M88.6791 5.281C102.143 9.65567 113.876 18.1804 122.197 29.6334L67.9637 69.0365L88.6791 5.281Z" />
    </Mask>
    <Path
      d="M88.6791 5.281C102.143 9.65567 113.876 18.1804 122.197 29.6334L67.9637 69.0365L88.6791 5.281Z"
      fill="#5AB9A5"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-10-inside-9_51_79214)"
    />
    <Mask id="path-11-inside-10_51_79214" fill="white">
      <Path d="M122.197 29.6334C130.518 41.0865 135 54.8798 135 69.0365L67.9637 69.0365L122.197 29.6334Z" />
    </Mask>
    <Path
      d="M122.197 29.6334C130.518 41.0865 135 54.8798 135 69.0365L67.9637 69.0365L122.197 29.6334Z"
      fill="white"
      stroke="black"
      strokeOpacity={0.1}
      strokeWidth={0.781766}
      mask="url(#path-11-inside-10_51_79214)"
    />
    <G filter="url(#filter0_d_51_79214)">
      <Path
        d="M94.7391 69.0374L80.6673 77.1618L80.6673 60.9131L94.7391 69.0374Z"
        fill="#FF4700"
      />
      <Path
        d="M81.2536 61.9286L93.5664 69.0374L81.2536 76.1463L81.2536 61.9286Z"
        stroke="black"
        strokeOpacity={0.1}
        strokeWidth={1.17265}
      />
    </G>
    <G filter="url(#filter1_d_51_79214)">
      <Circle cx={68.1591} cy={69.2308} r={15.2444} fill="white" />
    </G>
    <G filter="url(#filter2_d_51_79214)">
      <Circle cx={68.1591} cy={69.2324} r={11.7265} fill="#FF4700" />
    </G>
    <G filter="url(#filter3_i_51_79214)">
      <Path
        d="M135 69.0365C135 106.06 104.987 136.073 67.9637 136.073C30.9405 136.073 0.927238 106.06 0.927238 69.0365C0.927238 32.0132 30.9405 2 67.9637 2C104.987 2 135 32.0132 135 69.0365ZM7.63089 69.0365C7.63089 102.357 34.6428 129.369 67.9637 129.369C101.285 129.369 128.297 102.357 128.297 69.0365C128.297 35.7156 101.285 8.70365 67.9637 8.70365C34.6428 8.70365 7.63089 35.7156 7.63089 69.0365Z"
        fill="#003549"
      />
    </G>
    <G filter="url(#filter4_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 68.1588 132.556)"
        fill="white"
      />
    </G>
    <G filter="url(#filter5_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 31.4161 120.827)"
        fill="white"
      />
    </G>
    <G filter="url(#filter6_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 6.79045 86.0401)"
        fill="white"
      />
    </G>
    <G filter="url(#filter7_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 6.79046 50.4698)"
        fill="white"
      />
    </G>
    <G filter="url(#filter8_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 31.4161 17.2452)"
        fill="white"
      />
    </G>
    <G filter="url(#filter9_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 68.1588 5.12603)"
        fill="white"
      />
    </G>
    <G filter="url(#filter10_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 104.511 17.2452)"
        fill="white"
      />
    </G>
    <G filter="url(#filter11_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 128.746 50.4698)"
        fill="white"
      />
    </G>
    <G filter="url(#filter12_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 128.746 86.0401)"
        fill="white"
      />
    </G>
    <G filter="url(#filter13_d_51_79214)">
      <Circle
        r={1.56353}
        transform="matrix(-1 0 0 1 104.511 120.827)"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SpinWheelSVG;