import { createStackNavigator } from "@react-navigation/stack";
import * as screens from "../Screens"

import { Route } from "./route";

const RootStack = createStackNavigator();

function RootNavigator() {
    return (
        <RootStack.Navigator
        >
            <RootStack.Screen name={Route.Login} component={screens.Login} />
            <RootStack.Screen
                name={Route.Register}
                component={screens.Register}
            />
            <RootStack.Screen name={Route.Profile} component={screens.Profile} />

        </RootStack.Navigator>
    );
}

export default RootNavigator;