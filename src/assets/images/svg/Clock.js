import * as React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const Clock = (props) => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.1695 3.80869C22.5795 1.91134 25.4204 1.91134 26.8304 3.80869L28.2727 5.74935L30.4411 4.60812C32.545 3.50086 35.1194 4.75025 35.5514 7.08818L35.9718 9.36412L38.356 9.25666C40.7614 9.14825 42.5657 11.4288 41.9067 13.7447L41.2998 15.8777L43.4006 16.7499C45.6466 17.6824 46.2969 20.5549 44.6715 22.3638L43.2013 24L44.6715 25.6362C46.2969 27.4451 45.6466 30.3176 43.4005 31.2501L41.2998 32.1223L41.9067 34.2553C42.5657 36.5712 40.7614 38.8518 38.356 38.7433L35.9718 38.6359L35.5514 40.9118C35.1194 43.2498 32.545 44.4991 30.4411 43.3919L28.2727 42.2507L26.8304 44.1913C25.4204 46.0887 22.5795 46.0887 21.1695 44.1913L19.7272 42.2507L17.5588 43.3919C15.4549 44.4991 12.8805 43.2498 12.4486 40.9118L12.0281 38.6359L9.64388 38.7433C7.23853 38.8518 5.43426 36.5712 6.0932 34.2553L6.70011 32.1223L4.59937 31.2501C2.35335 30.3176 1.70306 27.4451 3.32845 25.6362L4.79857 24L3.32845 22.3638C1.70306 20.5549 2.35334 17.6824 4.59936 16.7499L6.70011 15.8777L6.0932 13.7447C5.43426 11.4288 7.23853 9.14825 9.64388 9.25666L12.0281 9.36412L12.4486 7.08818C12.8805 4.75025 15.4549 3.50086 17.5588 4.60812L19.7272 5.74935L21.1695 3.80869Z"
      fill="#C20000"
    />
    <G clipPath="url(#clip0_5056_65174)">
      <Path
        d="M29.618 17.968L31.071 16.515L32.485 17.929L31.032 19.382C32.4678 21.1792 33.1609 23.4579 32.9691 25.7501C32.7772 28.0424 31.715 30.1742 30.0005 31.7077C28.286 33.2412 26.0494 34.0601 23.75 33.9961C21.4506 33.9321 19.263 32.9901 17.6365 31.3635C16.0099 29.737 15.0679 27.5494 15.0039 25.25C14.9399 22.9506 15.7587 20.714 17.2923 18.9995C18.8258 17.285 20.9576 16.2228 23.2499 16.0309C25.5421 15.8391 27.8208 16.5322 29.618 17.968V17.968ZM24 32C24.9193 32 25.8295 31.8189 26.6788 31.4672C27.5281 31.1154 28.2997 30.5998 28.9497 29.9497C29.5998 29.2997 30.1154 28.5281 30.4672 27.6788C30.8189 26.8295 31 25.9193 31 25C31 24.0807 30.8189 23.1705 30.4672 22.3212C30.1154 21.4719 29.5998 20.7003 28.9497 20.0503C28.2997 19.4002 27.5281 18.8846 26.6788 18.5328C25.8295 18.1811 24.9193 18 24 18C22.1435 18 20.363 18.7375 19.0503 20.0503C17.7375 21.363 17 23.1435 17 25C17 26.8565 17.7375 28.637 19.0503 29.9497C20.363 31.2625 22.1435 32 24 32V32ZM23 20H25V26H23V20ZM20 13H28V15H20V13Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5056_65174">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(12 12)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Clock;
