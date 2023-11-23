import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/profile.style'
import { AuthContext } from "../../context/auth";
import ProfileCard from '../components/ProfileCard';

export default function Profile() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textStyle}>Perfil</Text>
      <ProfileCard img={user.img} username={user.username} fullname={user.fullname}/>
    </SafeAreaView>
  );
}