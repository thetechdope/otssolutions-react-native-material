
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import DemoButton from './src/11 Jan/DemoButton';
import DemoFlatlist from './src/11 Jan/DemoFlatlist';
import DemoScrollView from './src/11 Jan/DemoScrollView';
import DemoView from './src/11 Jan/DemoView';
import DemoImage from './src/12 Jan/DemoImage';
import DemoImageBackground from './src/12 Jan/DemoImageBackground';
import DemoInput from './src/12 Jan/DemoInput';
import DemoWithFLWithCC from './src/12 Jan/DemoWithFLWithCC';
import DemoWithFLWithCC2 from './src/12 Jan/DemoWithFLWithCC2';
import DemoStyles from './src/13 Jan/DemoStyles';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/16 Jan/Navigator';
import TabNavigator from './src/17 Jan/Navigator';
import DrawerNavigator from './src/17 Jan/Navigator/DemoDrawer';

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      {/* <DemoView /> */}
      {/* <DemoFlatlist /> */}
      {/* <DemoScrollView /> */}
      {/* <DemoButton/> */}
      {/* <DemoWithFLWithCC /> */}
      {/* <DemoImage/> */}
      {/* <DemoImageBackground /> */}
      {/* <DemoInput /> */}
      {/* <DemoStyles /> */}
      <NavigationContainer>
        {/* <RootNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
