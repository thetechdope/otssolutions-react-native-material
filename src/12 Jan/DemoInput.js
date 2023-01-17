//understanding for TextInput

import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native';

const DemoInput = () => {
    const [value, setValue] = useState('')
console.log("hello")

    return (
        <SafeAreaView>
            <TextInput
                value={value}
                style={{
                    height: 50, width: "100%",
                    borderWidth: 1,
                }}
                secureTextEntry
                keyboardType='numeric'
                onChangeText={(text) => {
                    console.log(text);
                    setValue(text)
                }
                }
            />
        </SafeAreaView>
    )
}

export default DemoInput
