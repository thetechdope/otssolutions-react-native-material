//understanding of how to create flatlist with custom component

import React from 'react'
import { View, FlatList, SafeAreaView, Text } from "react-native";
import MyListComp from './Component/myListComp';


const DATA = [
    { id: 1, name: "Bhautik", score: 30 },
    { id: 2, name: "Sourabh", score: 20 },
    { id: 3, name: "Kaustubh", score: 10 },
    { id: 4, name: "Mohammad", score: 45 },
]

const DemoWithFLWithCC2 = () => {
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

export default DemoWithFLWithCC2
