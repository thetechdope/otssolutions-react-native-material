import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from "react-native";

const Profile = ({ navigation, route: { params } }) => {

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      alert("focused!!")
    }
  }, [isFocused])

  return (
    <SafeAreaView>
      <Text>{params.name}</Text>
    </SafeAreaView>
  )
}

export default Profile
