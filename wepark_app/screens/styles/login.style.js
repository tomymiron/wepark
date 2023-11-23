import { StyleSheet, Dimensions  } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.dark_02,
    justifyContent: "space-between",
    paddingHorizontal: SIZES.b,
    flexDirection: "column",
    flex: 1,
  },
  
  inputsContainer: {
    flexDirection: "column",
    marginTop: "50%",
    width: "100%",
  },
  welcomeText: {
    fontFamily: "FiraSans_semiBold",
    fontSize: SIZES.l,
    color: COLORS.white_04,
  },

  innerInputsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: SIZES._a,
  },
  inputOut: {
    backgroundColor: COLORS.blue_08,
    justifyContent: "space-between",
    paddingHorizontal: SIZES.c,
    paddingVertical: SIZES.d,
    borderRadius: SIZES._b,
    flexDirection: "row",
    width: "100%",
  },
  input: {
    fontFamily: "FiraSans_regular",
    color: COLORS.white_04,
    fontSize: SIZES.d,
  },
  forgotPassText: {
    marginTop: SIZES._a,
    color: COLORS.blue_09,
    fontFamily: "FiraSans_regular",
    fontSize: SIZES.c,
    textDecorationLine: "underline",
  },
  

  


  buttonsContainer: {
    flexDirection: "column",
    marginBottom: SIZES.h,
    width: "100%",
    gap: SIZES.a,
  },
  loginButton: {
    backgroundColor: COLORS.blue_07,
    justifyContent: "center",
    borderRadius: SIZES.a,
    alignItems: "center",
    height: SIZES.p,
  },
  buttonText: {
    fontFamily: "FiraSans_medium",
    color: COLORS.white_04,
    fontSize: SIZES.e,
  },
  registerButton: {
    borderColor: COLORS.blue_07,
    justifyContent: "center",
    borderWidth: SIZES._f,
    borderRadius: SIZES.a,
    alignItems: "center",
    height: SIZES.p,
  }
});

export default styles;