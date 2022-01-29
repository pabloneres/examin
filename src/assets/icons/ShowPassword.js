import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ShowPassword = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={15} {...props}>
    <Path
      data-name="Caminho 12"
      d="M12 15c6.627 0 12-7.5 12-7.5S18.627 0 12 0 0 7.5 0 7.5 5.373 15 12 15Zm0-3.75A3.75 3.75 0 1 0 8.25 7.5 3.75 3.75 0 0 0 12 11.25Z"
      fill="#989292"
      fillRule="evenodd"
    />
  </Svg>
)

export default ShowPassword
