import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Route } from '../../Navigator/route';

const Login = (props) => {
  console.log(props, "props")
  const { navigation: { navigate, replace, goBack, pop }, route } = props
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => { replace(Route.Register) }}
        style={{
          height: 50, paddingHorizontal: 10,
          backgroundColor: "green", justifyContent: "center", alignItems: "center"
        }}
      >
        <Text>Go To Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
