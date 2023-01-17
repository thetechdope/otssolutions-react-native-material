//understanding of how to create flatlist with custom component

import React from 'react'
import { View, FlatList, SafeAreaView, Text } from "react-native";
import MyListComp from './Component/myListComp';
import image_data from "../image/demo.jpg";

const DATA = [
    { id: 1, name: "Bhautik", score: 30, image : require("../image/demo.jpg") },
    { id: 2, name: "Sourabh", score: 20, image : image_data },
    { id: 3, name: "Kaustubh", score: 10, image : image_data },
    { id: 4, name: "Mohammad", score: 45 , image : image_data},
]

const DemoWithFLWithCC = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                
                renderItem={({ item, index }) => {
                    return <MyListComp 
                        data={item}
                    />
                }}
            />
        </SafeAreaView>
    )
}

export default DemoWithFLWithCC
