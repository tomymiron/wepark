import { AdminHome, AdminAnalytics, AdminFees, AdminProfile, Home, Map, QrCode, Profile } from "../screens/index";
import { StyleSheet, View, TouchableOpacity, Dimensions, Animated, } from "react-native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth";
import { COLORS, SIZES } from "../constants/theme";
import Icon from "../constants/Icon";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabBar({ state, descriptors, navigation }) {

  const [translateX] = useState(new Animated.Value(0));
  const translateTab = (index) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.slidingTabContainer}>
        <Animated.View style={[styles.slidingTab, { transform: [{ translateX }] }]} />
      </View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => { navigation.emit({ type: "tabLongPress", target: route.key, }); };
        const tabBarIcon = options.tabBarIcon;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon size="33px" name={isFocused ? tabBarIcon.activeIcon : tabBarIcon.inActiveIcon} color={COLORS.white_03} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const tabArrAdmin = [
  { route: "AdminHome", icon: "house", component: AdminHome },
  { route: "AdminFees", icon: "fees", component: AdminFees },
  { route: "AdminAnalytics", icon: "chart", component: AdminAnalytics },
  { route: "AdminProfile", icon: "profile", component: AdminProfile },
];

const tabArr = [
  { route: "Home", icon: "house", component: Home },
  { route: "Map", icon: "map", component: Map },
  { route: "QrCode", icon: "qr-code", component: QrCode },
  { route: "Profile", icon: "user-check", component: Profile },
];

export default function StackScreens() {
  const { user } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        presentation: "transparentModal",
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Main"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />

      {user && user.org_name != null ? (
        <>{/* ADMIN SCREENS HERE*/}</>
      ) : (
        <>{/* USER SCREENS HERE*/}</>
      )}
    </Stack.Navigator>
  );
}

const { width } = Dimensions.get("window");
const MARGIN = SIZES.c;
const TAB_BAR_WIDTH = width - MARGIN * 2;
const TAB_WIDTH = TAB_BAR_WIDTH / tabArr.length;

function BottomTabNavigation() {

  const { user } = useContext(AuthContext);

  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }} >
      {user.org_name != null ? tabArrAdmin.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{ tabBarIcon: { inActiveIcon: _.icon, activeIcon: _.icon == "profile-img" ? _.activeIcon : _.icon, }, }}
          />
        );
      }) : tabArr.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{ tabBarIcon: { inActiveIcon: _.icon, activeIcon: _.icon == "profile-img" ? _.activeIcon : _.icon, }, }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navBarIcons: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    height: SIZES.o,
    width: SIZES.o,
  },
  navBarIconsActive: {
    backgroundColor: COLORS.blue_02,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
    height: SIZES.o,
    width: SIZES.o,
  },
  navBarImage: {
    borderColor: COLORS.white_03,
    borderRadius: 1000,
    height: SIZES.h,
    width: SIZES.h,
    borderWidth: 1,
  },
  navBarImageActive: {
    borderColor: COLORS.white_03,
    borderRadius: 1000,
    height: SIZES.l,
    width: SIZES.l,
    borderWidth: 1,
  },
  tabBarContainer: {
    backgroundColor: COLORS.dark_01,
    justifyContent: "space-around",
    width: TAB_BAR_WIDTH,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 1000,
    borderTopWidth: 0,
    paddingBottom: 0,
    height: SIZES.t + 4,
    bottom: MARGIN,
    elevation: 0,
  },
  slidingTabContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    width: TAB_WIDTH,
  },
  slidingTab: {
    backgroundColor: COLORS.blue_02,
    borderRadius: 1000,
    height: 60,
    width: 60,
  },
});