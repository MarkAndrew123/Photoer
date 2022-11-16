import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { data } from './dummyPictures'
import Picture from './Picture'
import { FlatList } from 'react-native-gesture-handler'
import NoImages from '../Tools/NoImage'
import { groupArrayByKey } from '../../util'


const Pictures = () => {

  const gallery = groupArrayByKey('category', data);

  return (
    <View
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      marginTop: 20,
      paddingBottom: 70,

    }}
    >
      <ScrollView 
      style={{
        // height: '100%'
      }}
      >                


          {
            gallery.length === 0?
            <NoImages />
            :
            gallery
            .map(x => (
              x.value.length === 0?
             <NoImages />              :
              <View>
        
         <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', margin: 5}}>
                    {x.key}
                  </Text>
                  <FlatList   
                    data={x.value}
                    horizontal={true}
                    keyExtractor={(item, index) => index +''}
                    renderItem={({item})  => <Picture name={item.name} imgSrc={item.imgSrc}/>}
                    
                  />
              </View>
            ))
          }
      </ScrollView>
      
    </View>
  )
}

export default Pictures