import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const Close = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12.707}
    height={12.707}
    {...props}
  >
    <G data-name="Grupo 22" fill="none" stroke="#989292">
      <Path data-name="Caminho 78" d="m12.354.354-12 12m12-12-12 12" />
      <Path data-name="Caminho 79" d="m.354.354 12 12m-12-12 12 12" />
    </G>
  </Svg>
)

export default Close
