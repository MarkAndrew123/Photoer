import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../Screens/Homescreen';
import { RouteStackParamList } from './RouteStackParamList';
import Fullimage from '../Screens/FullImage';

const Stack = createNativeStackNavigator<RouteStackParamList>()
const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={Homescreen} name="Homescreen" />
        <Stack.Screen component={Fullimage} name="Fullimage" />
    </Stack.Navigator>
  )
}


export default Navigation;