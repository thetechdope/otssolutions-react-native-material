//understanding of button and touchable

import React from 'react'
import { 
    View, 
    Button, 
    SafeAreaView, 
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Text
 } from "react-native"

const DemoButton = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Button onPress={() => alert("hello")} title='My Button' />

            <TouchableOpacity>
                <Text>Click here</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DemoButton
