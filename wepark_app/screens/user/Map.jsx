import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'
import { COLORS } from '../../constants/theme';
import Icon from '../../constants/Icon';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "../styles/map.style";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Map() {
  return (
    <SafeAreaView>
      <MapView style={{width: screenWidth, height: screenHeight, position: "absolute", zIndex: -1}}
         showsUserLocation={true}
         initialRegion={{
            latitude: -34.603722,
            longitude: -58.381592,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
         followsUserLocation={true}
      >

      </MapView>
        <View style={styles.mainContainer}>
          <View style={styles.searcherContainer}>
            <Icon name="search" color={COLORS.white_04} size="30px"/>
            <TextInput
              style={styles.searcher}
              placeholder="Buscar"
              placeholderTextColor={COLORS.white_04}
            />
          </View>

          <View style={styles.bottomFilter}>
            <TouchableOpacity style={styles.filterButton}>
              <Icon name="chart" color={COLORS.white_04} size="30px"/>
              <Text style={styles.filterText}>Ordenar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.filterButton}>
              <Icon name="filter" color={COLORS.white_04} size="30px"/>
              <Text style={styles.filterText}>Ordenar</Text>
            </TouchableOpacity>
          </View>
        </View>

    </SafeAreaView>
  )
}