import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/auth";
import FlashMessage from "react-native-flash-message";
import { StatusBar } from "react-native";
import React from "react";
import Main from "./Main";

export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Main />
        <FlashMessage floating={true} duration={3000} style={{zIndex: 9999}} position="top" statusBarHeight={StatusBar.currentHeight} />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}