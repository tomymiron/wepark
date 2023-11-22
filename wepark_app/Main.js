import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context/authContext";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useContext, useEffect } from "react";
import LoginTab from "./login/LoginNavigation";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";


const Stack = createStackNavigator();

export default function Main() {
  const { user, isLoged } = useContext(AuthContext);

  // FONTs Import
  const [fontsLoaded] = useFonts({
    FiraSans_ExtraLight: require("./assets/fonts/FiraSans-ExtraLight.ttf"),
    FiraSans_extraBold: require("./assets/fonts/FiraSans-ExtraBold.ttf"),
    FiraSans_semiBold: require("./assets/fonts/FiraSans-SemiBold.ttf"),
    FiraSans_regular: require("./assets/fonts/FiraSans-Regular.ttf"),
    FiraSans_medium: require("./assets/fonts/FiraSans-Medium.ttf"),
    FiraSans_black: require("./assets/fonts/FiraSans-Black.ttf"),
    FiraSans_light: require("./assets/fonts/FiraSans-Light.ttf"),
    FiraSans_bold: require("./assets/fonts/FiraSans-Bold.ttf"),
    FiraSans_thin: require("./assets/fonts/FiraSans-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          cardOverlayEnabled: false,
          presentation: "transparentModal",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {
          !isLoged ? (
            <Stack.Screen
              name="Register-Login"
              component={LoginTab}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name="Bottom-Navigation"
              component={BottomTabNavigation}
              options={{ headerShown: false }}
            />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}