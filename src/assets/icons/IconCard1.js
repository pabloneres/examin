import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

const IconCard1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34.25}
    height={32.063}
    {...props}
  >
    <G data-name="Grupo 19" transform="translate(-.5 -.5)">
      <Path
        data-name="Caminho 74"
        d="M16 1h5v7.75a10 10 0 0 1-20 0V1h5"
        fill="none"
        stroke="#fff"
      />
      <Path
        data-name="Caminho 75"
        d="M30.583 14.563v7.5a10 10 0 0 1-20 0v-3.25"
        fill="none"
        stroke="#fff"
      />
      <Circle
        data-name="Elipse 16"
        cx={4}
        cy={4}
        r={4}
        transform="translate(26.75 14.333)"
        fill="#b9a584"
      />
    </G>
  </Svg>
)

export default IconCard1
