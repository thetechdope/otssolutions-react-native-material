//UI for each row
import React from 'react'
import { View, Text, Image } from "react-native";

const MyListComp = (props) => {
    const { data: { name, score, image } } = props;
    return (
        <View style={{
            height: 50,
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            width: "100%", backgroundColor: "lightgray"
        }}
        >
            <Text>{name}</Text>
            <Text>{score}</Text>

            <Image
            source={image}
            />
        </View>
    )
}

export default MyListComp
