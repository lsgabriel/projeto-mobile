import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Circle,
} from "react-native-svg";
import { StyleSheet } from 'react-native';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function RoundBG1(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    //   width={832}
    //   height={1020}
      viewBox="0 0 832 1020"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.359}
          y1={0.861}
          x2={0.817}
          y2={0.858}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#7b206f" />
          <Stop offset={1} stopColor="#c833ca" />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          x1={0.242}
          y1={0.815}
          x2={0.89}
          y2={0.81}
          xlinkHref="#prefix__a"
        >
          <Stop offset={0} stopColor="#7b206f" />
          <Stop offset={1} stopColor="#c833ca" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.434}
          y1={0.839}
          x2={-0.057}
          y2={0.758}
          xlinkHref="#prefix__a"
        >
          <Stop offset={0} stopColor="#7b206f" />
          <Stop offset={1} stopColor="#c833ca" />
        </LinearGradient>
      </Defs>
      <G data-name="Componente 2 \u2013 1" transform="translate(12 108)">
        <Ellipse
          data-name="Elipse 13"
          cx={306}
          cy={259.5}
          rx={306}
          ry={259.5}
          transform="translate(96)"
          fill="#7b206f"
          opacity={0.6}
        />
        <G transform="translate(-12 -108)" filter="url(#prefix__b)">
          <Circle
            data-name="Elipse 10"
            cx={223}
            cy={223}
            r={223}
            transform="translate(22 108)"
            fill="url(#prefix__a)"
          />
        </G>
        <G transform="translate(-12 -108)" filter="url(#prefix__c)">
          <Ellipse
            data-name="Elipse 11"
            cx={301}
            cy={259.5}
            rx={301}
            ry={259.5}
            transform="translate(118 108)"
            fill="url(#prefix__d)"
          />
        </G>
        <Ellipse
          data-name="Elipse 12"
          cx={301.5}
          cy={259.5}
          rx={301.5}
          ry={259.5}
          transform="translate(120 26)"
          fill="url(#prefix__e)"
        />
        <Ellipse
          data-name="Elipse 9"
          cx={410}
          cy={428}
          rx={410}
          ry={428}
          transform="translate(0 56)"
          fill="#7b206f"
        />
      </G>
    </Svg>
  )
}

function RoundBG2(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={828}
      height={735}
      viewBox="0 0 828 735"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.359}
          y1={0.861}
          x2={0.817}
          y2={0.858}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#7b206f" />
          <Stop offset={1} stopColor="#c833ca" />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          x1={0.242}
          y1={0.815}
          x2={0.89}
          y2={0.81}
          xlinkHref="#prefix__a"
        >
          <Stop offset={0} stopColor="#7b206f" />
          <Stop offset={1} stopColor="#c833ca" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.434}
          y1={0.839}
          x2={-0.057}
          y2={0.758}
          xlinkHref="#prefix__a"
        >
          <Stop offset={0} stopColor="#7b206f" />
          <Stop offset={1} stopColor="#c833ca" />
        </LinearGradient>
      </Defs>
      <G data-name="Componente 3 \u2013 1" transform="translate(31 39)">
        {/* <Ellipse
          data-name="Elipse 13"
          cx={306}
          cy={259.5}
          rx={306}
          ry={259.5}
          transform="translate(77 69)"
          fill="#7b206f"
          opacity={0.6}
          style={styles.circle}
        /> */}
        <G transform="translate(-31 -39)" filter="url(#prefix__b)">
          <Circle
            data-name="Elipse 10"
            cx={223}
            cy={223}
            r={223}
            transform="translate(289 164)"
            fill="url(#prefix__a)"
          />
        </G>
        <G transform="translate(-31 -39)" filter="url(#prefix__c)">
          <Ellipse
            data-name="Elipse 11"
            cx={324}
            cy={259.5}
            rx={324}
            ry={259.5}
            transform="translate(31 91)"
            fill="url(#prefix__d)"
          />
        </G>
        <Ellipse
          data-name="Elipse 12"
          cx={284.5}
          cy={259.5}
          rx={284.5}
          ry={259.5}
          transform="translate(79 21)"
          fill="url(#prefix__e)"
        />
        <Circle
          data-name="Elipse 9"
          cx={265}
          cy={265}
          r={265}
          transform="translate(126)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export { RoundBG1, RoundBG2 };


const styles = StyleSheet.create({
  circle:{
  },
})