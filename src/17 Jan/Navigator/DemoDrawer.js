import { createDrawerNavigator } from "@react-navigation/drawer";
import { Routes } from "./Routes";
import * as screens from "../screens"
import CustomDrawer from "../Components/CustomBottomTabBar/CustomDrawer";

const MyDrawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <MyDrawer.Navigator
            screenOptions={{
                drawerPosition : "right"
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <MyDrawer.Screen name={Routes.Home} component={screens.Home} />
            <MyDrawer.Screen name={Routes.Profile} component={screens.Profile} />
            <MyDrawer.Screen name={Routes.Settings} component={screens.Settings} />
        </MyDrawer.Navigator>
    )
}

export default DrawerNavigator;