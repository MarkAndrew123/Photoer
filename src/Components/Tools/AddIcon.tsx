import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { width } from '../../config/measurement'


type IIcon=  {
  imgSrc?: string
}

const AddIcon = (props: IIcon) => {
  return (
    <View style={{
     backgroundColor:'#000000',
     width: (width) ,
        height: (width /3 - 70),
        borderRadius:20,
        marginBottom: -100,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: -1,
        }} >
       <TouchableOpacity >
      <Image source={props.imgSrc? {uri:'../../../assets/image/plus.png'}: require('../../../assets/image/plus.png')}/> 
</TouchableOpacity>
     
    </View>
     

    
  ) 
}

export default AddIcon