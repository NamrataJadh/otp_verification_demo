import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";

// Keep splash screen visible
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);

  })

  return (
    <>
    <Stack screenOptions={{headerShown: false}}/>
    </>
  )
}

export default RootLayout
