import {
  Poppins_400Regular as fontReg, Poppins_700Bold as fontBold, useFonts
} from "@expo-google-fonts/poppins";
import React, { useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { scale, verticalScale } from 'react-native-size-matters';


const OTP_LENGTH = 4;

export default function Index() {
  useFonts({
    fontBold,
    fontReg,
  });

  const [otpDigits, setOtpDigits] = useState(Array(OTP_LENGTH).fill(""));
  // const inputRef = useRef<(TextInput | null)[]>([]);
  const inputRef = useRef<Array<TextInput | null>>([]);

  // ✅ Handle typing digits
  const handleOtpChange = (text: string, index: number) => {
    const updatedDigits = [...otpDigits];
    updatedDigits[index] = text;

    setOtpDigits(updatedDigits);

    // Move to next input if a digit is typed
    if (text && index < OTP_LENGTH - 1) {
      inputRef.current[index + 1]?.focus();
    }

    // Move to previous input if empty
    if (!text && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  // ✅ Handle Backspace
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otpDigits[index] === "") {
      // Move to previous input when backspace on empty field
      if (index > 0) {
        inputRef.current[index - 1]?.focus();
      }
    }
  };

  // ✅ Submit OTP
  const onVerifyOtp = () => {
    const otpCode = otpDigits.join("");

    if (otpCode.length === OTP_LENGTH) {
      console.log("Entered OTP:", otpCode);
    } else {
      console.log("OTP incomplete");
    }
  };

  // ✅ Resend OTP
  const onResendOtp = () => {
    console.log("Resend code triggered");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.main}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>Enter the verification code we just sent you on</Text>
          <Text style={styles.email}>example@gmail.com</Text>

          <View style={styles.row}>
            {otpDigits.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRef.current[index] = ref)}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.verifyBtn} onPress={onVerifyOtp}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Didn’t receive the code? </Text>
            <TouchableOpacity onPress={onResendOtp}>
              <Text style={styles.resend}>Resend</Text>
            </TouchableOpacity>
          </View>

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
  email: { fontSize: scale(18), fontFamily: "fontBold", marginBottom: verticalScale(30) },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: verticalScale(30) },
  otpInput: {
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
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  footerText: { fontSize: scale(18), fontFamily: "fontReg" },
  resend: { fontSize: scale(18), fontFamily: "fontBold" },
})
