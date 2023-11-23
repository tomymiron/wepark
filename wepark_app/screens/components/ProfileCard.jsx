import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import config from '../../server.config';
import { COLORS, SIZES } from '../../constants/theme';

export default function ProfileCard({img, username, fullname}) {
  return (
    <View style={{ width: "100%", backgroundColor: COLORS.dark_11, borderRadius: SIZES.a, flexDirection: "row", alignItems: "center", gap: SIZES.a, padding: SIZES.c }}>
        <Image
          source={
            img != undefined
              ? { uri: config.SERVER_URL + "/images/" + img }
              : require("../../assets/images/profile_user_default.png")
          }
          style={{ width: 90, height: 90, borderRadius: 1000 }}
        />
        <View style={{flexDirection: "column"}}>
          <Text style={{fontFamily: "FiraSans_semiBold", color: COLORS.white_04, fontSize: SIZES.e + 2}}>{username}</Text>
          <Text style={{fontFamily: "FiraSans_medium", color: COLORS.gray_01, fontSize: SIZES.d + 2, lineHeight: SIZES.e}}>{fullname}</Text>
          <TouchableOpacity style={{backgroundColor: COLORS.blue_05, borderRadius: SIZES._b, padding: SIZES._d, width: 80, marginTop: SIZES._b, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontFamily: "FiraSans_medium", color: COLORS.white_04, fontSize: SIZES.c}}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}