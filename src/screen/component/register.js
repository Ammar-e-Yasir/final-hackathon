import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { auth, createUserWithEmailAndPassword,doc,setDoc,db } from "../../config/firebase";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[errMsg , setErrMsg] = useState("");

  const register = async() => {
    // let userData = { name, email, role: "needyPerson" };

    
    try {
        let { user } = await createUserWithEmailAndPassword(auth, email, password);
        let dataRef = doc(db, 'users', user.uid);
        await setDoc(dataRef, {
            name,
            email,
            role:'user'
        });
        // navigation.navigate("Signup");

    }

    catch (err) {
        console.log(err)
       
        switch (err.message) {
            case 'Firebase: Error (auth/invalid-email).':
                setErrMsg('Invalid Email !');
                break;

            case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                setErrMsg('password should be at least 6 characters');
                break;

            case 'Firebase: Error (auth/email-already-in-use).':
                setErrMsg('Email already in use !');
                break;
        }
        setTimeout(() => { setErrMsg('') }, 2000)
    }


  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      behavior="padding"
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require('../images/logo.png')}  style={{height:100,width:205,marginTop:130}}/>
        <Text style={{ fontSize: 40, color: "#333", fontWeight: "bold" }}>
          User Register
        </Text>

        <Text style={{backgroundColor:'pink',color:'red',marginTop:10}}>{errMsg}</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          keyboardType="email-address"
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
        />

        {/* <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate('Signup')}}>
               
                <Text style={{fontSize:16,fontWeight:'bold',color:'#fff'}}>Login</Text>
            </TouchableOpacity> */}

        <TouchableOpacity style={styles.buttonOutline} onPress={()=>{register()}}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#0782F9" }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    // justifyContent:'center',
    fontWeight: "bold",
  },
  buttonOutline: {
    backgroundColor: "#fff",
    width: "60%",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#333",
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
});
