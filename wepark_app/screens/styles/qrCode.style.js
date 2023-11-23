import { COLORS, SIZES } from "../../constants/theme";
import { StatusBar, Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.dark_02,
    paddingHorizontal: SIZES.b,
    flex: 1,
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.a,
  },
  textStyle: {
    fontFamily: "FiraSans_semiBold",
    color: COLORS.white_04,
    fontSize: SIZES.h,
  },
  settingsButton: {
    backgroundColor: COLORS.dark_11,
    justifyContent: "center",
    borderRadius: SIZES._b,
    alignItems: "center",
    padding: SIZES._a,
  },
  mainQrContainer: {
    alignItems: "center",
    aspectRatio: 1 / 1,
    marginTop: SIZES.i,
    width: "100%",
  },
  qrContainer: {
    backgroundColor: COLORS.dark_01,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: SIZES.a,
    borderRadius: 20,
    height: screenHeight * .7,
    width: "90%",
  },
  qr: {
    borderRadius: 40,
    height: "100%",
    width: "100%",
  },
  usernameContainer: {
    justifyContent: "center",
    marginTop: SIZES.a,
    height: SIZES.m,
    width: "100%",
  },
  usernameText: {
    alignSelf: "center",
  },
  username: {
    fontFamily: "Raleway_semiBold", 
    fontSize: SIZES.h,
  },
});

export default styles;