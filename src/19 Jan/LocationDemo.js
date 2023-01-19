import React, { useEffect } from 'react';
import { View, Text } from "react-native";
import GetLocation from 'react-native-get-location'

const LocationDemo = () => {

    useEffect(() => {
        getCurrentLocation()
    }, [])

    const getCurrentLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
        })
            .then(location => {
                console.log(location, "location")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <View>

        </View>
    )
}

export default LocationDemo
