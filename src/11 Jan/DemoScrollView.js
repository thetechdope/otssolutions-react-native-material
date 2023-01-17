//understading of scrollview

//mapping of array

import React from 'react'
import { View, ScrollView, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native"

const DATA = [
    { userId: 1, name: "title 1" },
    { userId: 2, name: "title 2" },
    { userId: 3, name: "title 3" },
    { userId: 4, name: "title 4" },
    { userId: 5, name: "title 5" },
    { userId: 6, name: "title 6" },
    { userId: 7, name: "title 7" },
]

const DemoScrollView = () => {
    return (
        <SafeAreaView>
            <View style={{
                flexDirection: "row",
                height: 100,
                width: "100%", backgroundColor: "lightgray"
            }}>
                <ScrollView horizontal>
                   
                    <View style={{ flexDirection: "row" }}>
                        {
                            DATA.map((item, i) => {
                                return <View key={`item-${i}`}>
                                    <TouchableOpacity
                                        onPress={() => alert(item.name)}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default DemoScrollView
