//understaing of image
import React from 'react'
import { View, Image } from "react-native"
import Demo_Image from "./../image/demo.jpg"

const DemoImage = () => {
    return (
        <View>
            <Image
                source={{ uri: "your_remote_url" }}
                // style={{ height: 100, width: 100 }}
                resizeMode="cover"
            />

            <Image
                source={require("./../image/demo.jpg")}
                style={{ height: 100, width: 100 }}
                resizeMode="cover"
            />

            <Image
                source={Demo_Image}
                style={{ height: 100, width: 100 }}
                resizeMode="cover"
            />
        </View>
    )
}

export default DemoImage
