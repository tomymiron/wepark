import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../constants/Icon";
import styles from "../styles/qrCode.style";
import { COLORS, SIZES } from "../../constants/theme";
import React, { useEffect, useState } from "react";

import { BarCodeScanner } from 'expo-barcode-scanner';
const screenHeight = Dimensions.get("window").height;

export default function AdminQrManagment() {

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

   const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.textStyle}>Escaneo QR</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Icon name="circle-check" size="26px" color="#EEF0FA" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainQrContainer}>
        <View style={styles.qrContainer}>
        {hasPermission === null ? "" : hasPermission === false ? "Error: No access to camera" : 
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{width: 500, height: screenHeight * .7}}
          />
        }
        <View style={{borderColor: COLORS.blue_05, borderStyle: "solid", borderRadius: SIZES.f, borderWidth: SIZES._c, width: 250, height: 250, position: "absolute"}}>

        </View>
        
        {scanned && <TouchableOpacity style={{backgroundColor: "#f0f", width: 100, height: 100, position: "absolute", top: 100, left: 100}} onPress={() => setScanned(false)} ><Text>Scan again</Text></TouchableOpacity>}
        </View>
      </View>
    
      <View style={{ zIndex: -1,position: "absolute", top: "55%", transform: [{translateY: -width / 2}]}}>
      </View>
    </SafeAreaView>
  );
}