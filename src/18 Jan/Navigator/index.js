import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import * as screens from "../screens";

const MyStack = createStackNavigator();

const MyNavigator = () => {
    return (
        <MyStack.Navigator>
            <MyStack.Screen name={Routes.Home} component={screens.Home} />
            <MyStack.Screen name={Routes.Profile} component={screens.Profile} />
        </MyStack.Navigator>
    )
}

export default MyNavigator