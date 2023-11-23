import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from "react";
import config from "../server.config";
import axios from "axios";
global.Buffer = require('buffer').Buffer;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoged, setIsLoged] = useState(false);

  const getData = async (item) => {
    try {
      let jsonValue = await AsyncStorage.getItem(item);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("Ocurrio un error!");
    }
  };

  const storeData = async (item, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(item, jsonValue);
    } catch (e) {
      console.log("Ocurrio un error!");
    }
  };

  const login = async (inputs) => {
    try{
      const res = await axios.post(
        config.SERVER_URL + "/api/auth/login",
        inputs, { withCredentials: true }
      );
      if (res.status == 200) {

        let values = res.data;
        if(values.profile_img != null){
          const res2 = await axios.get(config.SERVER_URL + "/images/" + res.data.profile_img, {responseType: 'arraybuffer'})
          .then(response => {
            const base64 = Buffer.from(response.data, "base64");
            if(base64 != null){
              values.mainImage = base64.toString('base64');
            }
          })
          setUser(values);
          setIsLoged(true);
        }else{
          setUser(values);
          setIsLoged(true);
        }
      } else {
        setUser(null);
      }
    }catch(err){
      console.log("error" + err);
      throw err;
    }
  };

  const logout = () => {
    console.log("loging out...");
    setIsLoged(false);
    setTimeout(() => {
      setUser(null)
    }, 2000)
  }

  useEffect(() => {
    const setData = async () => {
      await getData("user")
      .then(data => {
        setUser(data);
        if(data != null){
          setIsLoged(true);
        }
      })
      
    }
    setData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      await storeData("user", user);
    }
    updateData();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, setUser, logout, isLoged, setIsLoged }}>
      {children}
    </AuthContext.Provider>
  );
};