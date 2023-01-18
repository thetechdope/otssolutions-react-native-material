import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { TouchableOpacity, View, Text } from "react-native";
import { Routes } from '../../Navigator/Routes';
import styles from './styles';
import axios from 'axios';

const {
    myButton
} = styles

const Home = () => {
    const navigation = useNavigation()

    useEffect(() => {
        // getDataWithFetch()
        // getDataWithAxios()
        // postDataWithFetch()
        // postDataWithAxios()
    }, [])

    const getDataWithFetch = () => {
        fetch("https://reqres.in/api/users?page=2")
            .then(data => data.json())
            .then(res => {
                console.log(res, "res")
            })
            .catch(err => {
                console.log(err, "err")
            })
    }

    const getDataWithAxios = () => {
        axios.get("https://reqres.in/api/users?page=2")
        .then(res => {
            console.log(res.data, "res")
        })
        .catch(err => {
            console.log(err, "err")
        })
    }

    const postDataWithFetch = () => {
        fetch("https://reqres.in/api/users", {
            method : "POST",
            headers: {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                "name": "Bhautik",
                "job": "React Native Developer"
            })
        })
        .then(data => data.json())
        .then(res => {
            console.log(res, "res")
        })
        .catch(err => {
            console.log(err)
        })
    }

    const postDataWithAxios = () => {
        axios.post("https://reqres.in/api/users", {
            data : {
                "name": "morpheus",
                "job": "leader"
            },
        })
        .then(res => {
            console.log(res, "res")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
                onPress={() => navigation.navigate(Routes.Profile, {
                    name: "Saurabh",
                    age: 25,
                    height: 30
                })}
                style={myButton}>
                <Text>Go to profile</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Home
