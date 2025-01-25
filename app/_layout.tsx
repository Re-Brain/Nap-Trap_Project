import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react'

const _layout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown : false}}/>
            <Stack.Screen name="+not-found"/>
        </Stack>
        <StatusBar style="light" />
    </>
    
  );
}

export default _layout;
