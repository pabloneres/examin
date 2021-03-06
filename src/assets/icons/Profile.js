import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const Profile = (props) => (
  <Svg
    data-name="Grupo 24"
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    {...props}
  >
    <Path
      data-name="Caminho 80"
      d="M.5 28.8a15.5 15.5 0 0 1 31 0v2a.7.7 0 0 1-.7.7H1.2a.7.7 0 0 1-.7-.7Z"
      fill="none"
      stroke="#26160f"
    />
    <Circle
      data-name="Elipse 17"
      cx={6.4}
      cy={6.4}
      r={6.4}
      transform="translate(9.6)"
      fill="#b9a584"
    />
  </Svg>
)

export default Profile
