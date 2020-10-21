import React from 'react';

import {useFonts} from 'expo-font'
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'
import  Routes from './src/routes/index'
import { StatusBar } from 'react-native'
export default function App() {

  const[fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold

  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <Routes/>
      </>
    );
  }
}