import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Routes } from '../../../Navigator/Routes';

const CustomDrawer = (props) => {
    console.log(props, "props")
    const [isfocused, setIsFocused] = useState(Routes.Home)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor : "green" }}>
            {
                props.state.routes.map((item, i) => {
                    return <TouchableOpacity
                        onPress={() => {
                            setIsFocused(item.name)
                            props.navigation.navigate(item.name)
                        }}
                        style={{
                            width: "100%",
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Text style={{color : "white"}}>{item.name}</Text>
                    </TouchableOpacity>
                })
            }
        </SafeAreaView>
    )
}

export default CustomDrawer
