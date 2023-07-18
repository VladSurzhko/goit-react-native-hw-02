import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
} from "react-native";

export const Registration = () => {
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const togglePassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={{
            ...styles.formWrapper,
            paddingBottom: isOpenKeyboard ? 10 : 78,
            height: isOpenKeyboard ? 360 : "auto",
          }}
        >
          <View style={styles.photoWrapper}>
            <TouchableOpacity style={styles.addPhotoButton}>
              <Text style={{ color: "#FF6C00" }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={[styles.commonTextParams, styles.input]}
            placeholder="Логін"
            onFocus={() => setIsOpenKeyboard(true)}
            onBlur={() => setIsOpenKeyboard(false)}
          ></TextInput>
          <TextInput
            style={[styles.commonTextParams, styles.input]}
            placeholder="Адреса електронної пошти"
            onFocus={() => setIsOpenKeyboard(true)}
            onBlur={() => setIsOpenKeyboard(false)}
          ></TextInput>
          <View>
            <TextInput
              style={[styles.commonTextParams, styles.input]}
              placeholder="Пароль"
              textContentType="password"
              secureTextEntry={secureTextEntry}
              onChange={setPassword}
              onFocus={() => setIsOpenKeyboard(true)}
              onBlur={() => setIsOpenKeyboard(false)}
              value={password}
            />
            <TouchableOpacity
              style={{ position: "absolute", top: 16, right: 16 }}
              onPress={togglePassword}
            >
              <Text>{secureTextEntry ? "Показати" : "Сховати"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.commonTextParams, styles.buttonText]}>
              Зареєстуватися
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.commonTextParams,
                { color: "#1B4371", textAlign: "center" },
              ]}
            >
              Вже є акаунт? Увійти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    textAlign: "center",
    marginBottom: 33,
  },
  formWrapper: {
    paddingTop: 92,
    paddingBottom: 78,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",
    width: "100%",
    // height: 549,
    position: "absolute",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: "100%",
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  commonTextParams: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  photoWrapper: {
    width: 120,
    height: 120,
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  addPhotoButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    borderRadius: 12.5,
    borderWidth: 1,
    position: "absolute",
    top: 81,
    right: -12.5,
  },
});