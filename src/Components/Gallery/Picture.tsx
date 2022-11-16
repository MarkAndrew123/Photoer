import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { width } from '../../config/measurement'
import {useNavigation} from '@react-navigation/native'
import Fullimage from '../../Screens/FullImage';
// import { data } from './dummyPictures';




type IPicture = {
    imgSrc?: string;
    name: string;

};





const Picture = (props: IPicture) => {
  


  const navigation = useNavigation()


    return (
   <TouchableOpacity 
   style={{
    width: (width /2) - 10,
    height: (width /3) * 2,
    borderRadius:8,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
    elevation: 5
   }} 
  onPress={  () => navigation.navigate( 'Fullimage' as never   ) }
   >
 



   </TouchableOpacity>
  )
}

export default Picture