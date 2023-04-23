import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'

import React from 'react'

import Pic from '../assets/img.jpg'

export default function Home({navigation}) {
  const blocks=[
    {
      id:1,
      name:"Recent"
    },
    {
      id:2,
      name:"Like"
    },
    {
      id:3,
      name:"Download"
    }
  ]
  return (
    <View style={styles.container}>
      <ImageBackground source={Pic} resizeMode='cover' style={styles.image}>
        <ScrollView style={styles.flow}> 
        {
          blocks.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  flow:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:30
  },
  item:{                                                                           
    fontSize:31,
    padding:10,
    margin:5,
    color:"white",
    borderColor:"orange",
    borderWidth:1,
    width:120,
    height:120,
    textAlignVertical:'center'
  },
  container:{
    flex:1
  },
  image:{
    flex:1
  }
})
