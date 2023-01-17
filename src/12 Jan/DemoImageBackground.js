//understanding of image background

import React from 'react'
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import Demo_image from "./../image/demo.jpg"

const DemoImageBackground = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                source={Demo_image}
                style={{ height: 600, width: 100 }}
            >
                <Text style={{color : "white"}}>My name</Text>
            </ImageBackground>

            <ImageBackground
                source={{ uri: "remote_url" }}
                style={{ height: 100, width: 100 }}
            />
        </SafeAreaView>
    )
}

export default DemoImageBackground
