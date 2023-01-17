import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as screens from "../screens";
import { Routes } from '../../17 Jan/Navigator/Routes'
import CustomBottomTabBar from '../Components/CustomBottomTabBar';
import { createStackNavigator } from "@react-navigation/stack"


const BottomTabs = createBottomTabNavigator();
const HomeTab = createStackNavigator();
const ProfileTab = createStackNavigator();
const SettingTab = createStackNavigator();

const RootHome = () => {
    return (
        <HomeTab.Navigator>
            <HomeTab.Screen name={Routes.Home} component={screens.Home} />
        </HomeTab.Navigator>
    )
}

const RootProfile = () => {
    return (
        <ProfileTab.Navigator>
            <ProfileTab.Screen name={Routes.Profile} component={screens.Profile} />
        </ProfileTab.Navigator>
    )
}

const RootSettings = () => {
    return (
        <SettingTab.Navigator>
            <SettingTab.Screen name={Routes.Settings} component={screens.Settings} />
        </SettingTab.Navigator>
    )
}


const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName={Routes.RootHome}
            tabBar={(props) => <CustomBottomTabBar {...props} />}
        >
            <BottomTabs.Screen name={Routes.RootHome} component={RootHome} />
            <BottomTabs.Screen name={Routes.RootProfile} component={RootProfile} />
            <BottomTabs.Screen
                options={{ 
                    headerShown: false,
                 }}
                name={Routes.RootSettings} component={RootSettings} />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;