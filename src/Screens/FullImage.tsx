import { View, Text, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RouteStackParamList } from '../navigation/RouteStackParamList'

type IFullimage = NativeStackScreenProps<RouteStackParamList, 'Fullimage'>;

const Fullimage = ({navigation, route}: IFullimage) => {

  // const data = route.params?.data

  // const handleNavi  = () => {
  //   // navigation.navigate('Homescreen', {{}})
  // }
  
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

    }}>
      <Text style={{
        marginTop: -50
      }}
      >Nothing to show here </Text>
      <Image source={require('./../../assets/image/cob.png')} 
      style={{
        marginBottom: -40
      }} />
    </View>
  )
}

export default Fullimage;