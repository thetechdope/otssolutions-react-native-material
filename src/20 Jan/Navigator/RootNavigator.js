import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from "./Routes"
import * as screens from "../screens";

const RootStack = createStackNavigator()

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name={Routes.Home} component={screens.Home} />
            <RootStack.Screen name={Routes.Profile} component={screens.Profile} />
        </RootStack.Navigator>
    )
}

export default RootNavigator;