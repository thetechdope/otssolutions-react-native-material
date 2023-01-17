//understading of flatlist
//destructing of array or object
import React from 'react'
import { View, FlatList, Text, SafeAreaView } from "react-native";

const DATA = [
    { userId: 1, name: "title 1" }, 
    { userId: 2, name: "title 2" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },
    { userId: 3, name: "title 3" },

]

const DATA2 = ["title2", "title3", "title4"]

const DemoFlatlist = () => {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item : { key , name }, index }) => {
                   return <View style={{height : 100}}>
                        <Text>{name}</Text>
                    </View>
                }}
                ListHeaderComponent={() => {
                    return <View style={{height : 100, width : "100%", backgroundColor :"green"}}></View>
                }}
                // ListFooterComponent={() => {
                //     return <View style={{height : 100, width : "100%", backgroundColor :"yellow"}}></View>
                // }}
            />
        </SafeAreaView>
    )
}

export default DemoFlatlist
