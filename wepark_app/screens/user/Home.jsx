import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/home.style'

export default function Home() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textStyle}>WePark</Text>
    </SafeAreaView>
  )
}