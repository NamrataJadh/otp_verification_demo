import {
  Poppins_400Regular as fontReg, Poppins_700Bold as fontBold, useFonts
} from "@expo-google-fonts/poppins";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  useFonts({
    fontBold,
    fontReg,
  });

  return (
    <View style={styles.main}>
      <Text style={styles.bodyTxt}>Welcome to Otp Verification Demo!!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ebe8e8",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyTxt: {
    fontSize: 15,
    fontFamily: "fontBold",
    color: "#6A334D"
  },
})
