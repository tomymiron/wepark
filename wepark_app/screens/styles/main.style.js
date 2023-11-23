import { StyleSheet, Dimensions  } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.dark_01,
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
    fontFamily: "Raleway_bold",
    color: COLORS.white_01,
    fontSize: SIZES.h,
  },
});

export default styles;