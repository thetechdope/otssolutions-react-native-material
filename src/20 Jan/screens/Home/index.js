import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { saveUser, updateLoading } from "../../Redux/Actions" 

const Home = () => {
    const dispatch = useDispatch();
    const { user_name , user_type, loading } = useSelector((state) => ({
        user_name: state.user_name,
        user_type : state.user_type,
        loading :  state.loading
    }))
    console.log( loading, "laoding")
    const updateStoreUser= () => {
        dispatch(saveUser({ test : "Saurabh", test2 : "React Native" }))
    }

    const loadingUpdate= () => {
        dispatch(updateLoading(true))
    }


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity 
            onPress={() => loadingUpdate()}
            style={{ height: 50, width: 100, justifyContent: "center", alignItems: "center", backgroundColor: "orange" }}>
                <Text>Update Store</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
