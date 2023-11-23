import { StyleSheet, Dimensions  } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.dark_01,
    paddingHorizontal: SIZES.b,
    paddingTop: SIZES.a,
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
});

export default styles;