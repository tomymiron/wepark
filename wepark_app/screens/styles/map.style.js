import { StyleSheet, Dimensions  } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-between",
    paddingHorizontal: SIZES.e,
    flexDirection: "column",
    paddingTop: SIZES.c,
    height: "94%"
  },

  searcherContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.dark_04,
    padding: SIZES.a,
    borderRadius: 1000,
    gap: SIZES.a,
  },
  searcher: {
    fontFamily: "FiraSans_regular",
    fontSize: SIZES.d,
  },

  bottomFilter: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginTop: 0,
    gap: SIZES.a,
    height: 50,
  },
  filterButton: {
    backgroundColor: COLORS.dark_04,
    borderRadius: SIZES._b,
    gap: SIZES._b,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRAdius: SIZES._a,
    flex: .5,
  },
  filterText: {
    fontFamily: "FiraSans_regular",
    color: COLORS.white_04,
    fontSize: SIZES.c,
  }
});

export default styles;