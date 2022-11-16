import { Text, View } from "react-native"
import { height } from "../../config/measurement"

const NoImages = () => {
  return (
    <View style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height - 100
        }}>
        <Text>No Image</Text>
      </View>
  )
}

export default NoImages;