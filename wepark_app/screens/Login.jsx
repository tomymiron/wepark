import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles/login.style";
import Icon from "../constants/Icon";
import React, { useContext, useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { AuthContext } from "../context/auth";

export default function Login() {
  const { login, user, setUser } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState(null);
  const [badMsg, setBadMsg] = useState(true);

  const handleLogin = async () => {
    setBadMsg(false);
    setErrMsg("Ingresando...");
    try {
      await login(inputs);
    } catch (err) {
      console.log("Paso: " + err);
      const { response } = err;
      const { request, ...errorObject } = response;
      setBadMsg(true);
      setErrMsg(errorObject.data);
    }
  };

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [visible, setVisible] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (value, name) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.mainContainer}
      >
        <KeyboardAvoidingView
          style={{
            zIndex: -1,
            position: "absolute",
            top: "34%",
            transform: [{ translateY: -width / 2 }],
          }}
        >
          <View style={[{ flexDirection: "row", minHeight: width * 1.3 }]}>
            <View
              style={{
                transform: [
                  { translateX: -(width / 2.6 - height / 2.6) * 2.75 },
                ],
              }}
            >
              <Text
                style={{
                  fontFamily: "FiraSans_black",
                  fontSize: 90,
                  color: COLORS.blue_06,
                  transform: [
                    { rotate: "90deg" },
                    { scale: 1.8 },
                    { translateX: width / 2 - height / 2.6 },
                    { translateY: -(width / 2.6 - height / 2.6) },
                  ],
                }}
                onLayout={(e) => {
                  setHeight(e.nativeEvent.layout.height);
                  setWidth(e.nativeEvent.layout.width);
                }}
              >
                WEPARK
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.inputsContainer}>
          <Text style={styles.welcomeText}>Bienvenido!</Text>
          <Text
            style={{
              fontFamily: "FiraSans_light",
              fontSize: SIZES.c,
              color: badMsg ? COLORS.red_00 : COLORS.blue_01,
              alignSelf: "flex-start",
              marginLeft: "5%",
              marginBottom: SIZES._b,
            }}
          >
            {errMsg}
          </Text>
          <View style={styles.innerInputsContainer}>
            <View style={styles.inputOut}>
              <TextInput
                onChangeText={(value) => handleChange(value, "email")}
                style={styles.input}
                placeholder="Ingrese su email"
                placeholderTextColor={COLORS.gray_01}
              />
            </View>
            <View style={styles.inputOut}>
              <TextInput
                onChangeText={(value) => handleChange(value, "password")}
                secureTextEntry={!visible}
                style={styles.input}
                placeholder="Ingrese su contraseña"
                placeholderTextColor={COLORS.gray_01}
              />
              <TouchableOpacity
                style={styles.visibleButton}
                onPress={() => setVisible(!visible)}
              >
                <Icon
                  name={visible ? "close-eye" : "open-eye"}
                  color={COLORS.gray_01}
                  size="30px"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassText}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => handleLogin()}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.buttonText}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
