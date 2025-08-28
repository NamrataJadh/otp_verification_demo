import {
  Poppins_400Regular as fontReg, Poppins_700Bold as fontBold, useFonts
} from "@expo-google-fonts/poppins";
import React, { useRef, useState } from "react";
import {
  Keyboard, KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  TouchableWithoutFeedback, View
} from "react-native";
import { scale, verticalScale } from 'react-native-size-matters';


const OTP_LENGTH = 4;

export default function Index() {
  useFonts({
    fontBold,
    fontReg,
  });

  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<(TextInput | null)[]>([]);

  return (
    // <View style={styles.main}>
    //   <Text style={styles.bodyTxt}>Welcome to Otp Verification Demo!!</Text>
    // </View>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.main}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>Enter the verification code we just sent you on</Text>
          <Text style={styles.email}>example@gmail.com</Text>

          <View style={styles.row}>
            {digits.map((value, i) => (
              <TextInput
                key={i}
                // ref={(r) => (inputsRef.current[i] = r)}
                style={styles.box}
                keyboardType="number-pad"
                maxLength={1}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.verifyBtn}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Didn’t receive the code? <Text style={styles.resend}>Resend</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ebe8e8",
    justifyContent: "center",
    alignItems: "center",
  },
  container: { flex: 1, paddingHorizontal: scale(40), justifyContent: "center" },
  title: { fontSize: scale(35), fontFamily: "fontBold", marginBottom: verticalScale(15) },
  subtitle: { fontSize: scale(18), fontFamily: "fontReg", marginBottom: verticalScale(15) },
  email: { fontSize: scale(18), fontFamily: "fontBold", marginBottom: verticalScale(18) },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: verticalScale(30) },
  box: {
    width: scale(60),
    height: verticalScale(55),
    borderWidth: 2,
    borderColor: "#d4d2d2",
    borderRadius: scale(12),
    textAlign: "center",
    fontSize: scale(28),
    fontFamily: "fontReg",
    padding: 0,
    marginRight: scale(10),
  },
  verifyBtn: {
    height: verticalScale(45),
    backgroundColor: "#6b6e6d",
    borderRadius: scale(14),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(20),
  },
  verifyText: { color: "#fff", fontSize: scale(20), fontFamily: "fontBold" },
  footerText: { fontSize: scale(18), fontFamily: "fontReg" },
  resend: { fontFamily: "fontBold" },
})
