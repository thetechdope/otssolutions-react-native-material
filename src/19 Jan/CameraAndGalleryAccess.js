import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

const options = {
    mediaType: "photo",
    videoQuality : Platform.OS == "ios" ? "medium" : "low",
    quality : 0.5
}

const CameraAndGalleryAccess = () => {

    const openCamera = async () => {
        const result = await launchCamera(options);
        console.log(result, "result")
    }

    const [selectedImage, setSelectedImage] = useState('')

    const openGallery = async () => {
        const result = await launchImageLibrary(options)
        console.log(result, "result")
        setSelectedImage(result.assets[0].uri)
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
                onPress={() => openCamera()}
            >
                <Text>Open Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 50 }}
                onPress={() => openGallery()}
            >
                <Text>Open Gallery</Text>
            </TouchableOpacity>


            <View>
                <Image
                    source={{ uri: selectedImage }}
                    style={{
                        height: 100,
                        width: 100
                    }}
                />
            </View>
        </View>
    )
}

export default CameraAndGalleryAccess
