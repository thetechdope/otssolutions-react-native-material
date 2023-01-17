import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Route } from '../../Navigator/route';

const Profile = (props) => {
  return (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate(Route.Login)}>
            <Text>Go Back</Text>
        </TouchableOpacity>


        <TouchableOpacity 
        style={{marginTop : 40}}
        onPress={() => props.navigation.navigate(Route.Register)}>
            <Text>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Profile
