// understanding of "View" Compoenent and "Text" Component
import React from 'react'
import { SafeAreaView, View, Text } from "react-native"

const DemoView = () => {
    return (
        <SafeAreaView>
            {/* Header UI */}
            <View style={{
                height: 50,
                width: 50,
                backgroundColor: "red"
            }}>  
                <Text>Hello</Text>
            </View>

            <Text>this is out of the box text</Text>
            <Text>
                line 1 
                line 2
                line 3
            </Text>
        </SafeAreaView>
    )
}

export default DemoView
