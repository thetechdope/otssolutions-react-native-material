import React, { useEffect } from 'react';
import { View, Animated } from "react-native";

const DemoAnimation = () => {

    let moveVer = new Animated.Value(0);
    let opacity = new Animated.Value(0);

    useEffect(() => {
        // moveVertical()
        // increaseOpacity()
        // springAnimation()
        parallelAnimation()
    }, [])

    const moveVertical = () => {
        Animated.timing(moveVer, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }

    const increaseOpacity = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }).start()
    }

    const transfer = moveVer.interpolate({
        inputRange: [0, 1],
        outputRange: ["5%", "50%"]
    })

    const _bg = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(15,14,32)', 'rgb(6,19,35)']
    })

    const rotate = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const springAnimation = () => {
        Animated.spring(opacity, {
            toValue: 1,
            friction: 10,
            tension: 15
        }).start()
    }

    const styles = {
        height : transfer,
        width : 100
    }

    const parallelAnimation = () => {
        Animated.delay(500)
        Animated.sequence([ 
            Animated.timing(moveVer, {
                toValue : 1,
                duration : 2000,
                useNativeDriver : true
            }).start(),

            Animated.timing(opacity, {
                toValue : 1,
                duration : 2000,
                useNativeDriver : true
            }).start(),
        ])
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Animated.View
                style={{
                    height: 100,
                    width: transfer,
                    backgroundColor: "red",
                    opacity : opacity,
                    ...styles
                    // transform: [{ translateY: transfer }]
                }}>

            </Animated.View>
        </View>
    )
}

export default DemoAnimation
