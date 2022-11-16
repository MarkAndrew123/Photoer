import { View, Text, SafeAreaView, Button, ImageBackground } from 'react-native'
import React from 'react'
import { height, width } from '../config/measurement'
import Pictures from '../Components/Gallery/Pictures'
// import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteStackParamList } from '../navigation/RouteStackParamList'
import { data } from '../Components/Gallery/dummyPictures'


type IHomescreen = NativeStackScreenProps<RouteStackParamList >;

const Homescreen = ({navigation}: IHomescreen) => {

  return (
   <View style={{flex:1, height: height,
    }}>
       

   <Pictures />

   {/* <TouchableOpacity
   onPress={() => {navigation.navigate('Fullimage', {data: data})}}
   >
    <Text>Navigate to fullImage</Text>
   </TouchableOpacity>
 */}

   </View>
  )
}


export default Homescreen