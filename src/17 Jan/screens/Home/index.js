import React from 'react';
import { View , Text, TouchableOpacity } from "react-native"

const Home = (props) => {
  return (
    <View style={{flex : 1, justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
        >
          <Text>Open Drawer</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home
