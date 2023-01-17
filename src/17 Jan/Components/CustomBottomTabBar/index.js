import React, { useState } from 'react';
import { TouchableOpacity, View, Text , Image} from "react-native"
import { Routes } from '../../Navigator/Routes';

const CustomBottomTabBar = (props) => {

    const renderIcon = (routeName) => {
        switch(routeName){
            case Routes.RootHome :{
                return <Image />
            }

            case Routes.RootProfile : {
                return <Image />
            }

            default : { 
                return <Image />
            }
        }
    }
    
    console.log(props, "props")

    const [isFocused, setIsFocused] = useState(Routes.RootHome)

    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            height: 70
        }}>
            {
                props.state.routes.map((item, i) => {
                    return <TouchableOpacity
                        onPress={() => {
                            setIsFocused(item.name)
                            props.navigation.navigate(item.name)
                        }}
                        style={{
                            height: "100%",
                            width: "33.33%",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        {renderIcon(item.name)}
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

export default CustomBottomTabBar
