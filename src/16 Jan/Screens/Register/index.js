import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Route } from '../../Navigator/route'

const Register = (props) => {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => props.navigation.pop()}
      >
        <Text>Back to Previous screen</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{ marginTop: 40 }}
        onPress={() => { props.navigation.navigate(Route.Profile) }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Register
