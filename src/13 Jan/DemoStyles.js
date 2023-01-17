//understading of styles

import React from 'react';
import { View, Text, SafeAreaView, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

const rectWidth = width / 2;
const rectHeight = rectWidth

const DemoStyles = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center"
        }}>

        <View style={{
          height: rectHeight,
          width: rectWidth,
          backgroundColor: "red",
          zIndex:-1111111,
          borderRadius: 500,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <View style={{ height: 50, width: 50, backgroundColor: "black" }}></View>
        </View>

      </View>

      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <Text style={{
          fontSize: 26,
          color: "green",
          fontStyle : "italic",
          fontWeight : "700",
          textDecorationLine : "underline"
        }}>Hello this is bhautik</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "blue" }}></View>


    </SafeAreaView>
  )
}

export default DemoStyles
