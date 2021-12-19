import React, { useState, useContext } from "react";
import { View, Button, TextInput, StyleSheet, Text, Picker, TouchableOpacity, ScrollView, SafeAreaView, Alert } from "react-native";
import { auth, signOut, addDoc, collection, db,setDoc,doc } from '../config/firebase'
import { GlobalContext } from "../context/context";


export default function RashanForm({ navigation }) {
  //  let uid =  localStorage.getItem('userId');

  const { state, dispatch } = useContext(GlobalContext)
  // let uid = state?.authUser?.uid;
  const [name, setName] = useState('');
  const [fName, setFName] = useState('');
  const [cnic, setCnic] = useState('');
  const [member, setMember] = useState('');
  const [dob, setDOB] = useState();
  const [incom, setIncom] = useState('');
  const [selected, setSelectedValue] = useState('');

  const rashanResquest = async () => {



    try {
      const docRef = await setDoc(doc(db, "request",state.authUser.uid), {
        name,
        fName,
        cnic,
        member,
        dob,
        incom,
        uid: state.authUser.uid,
        date: new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear() + " " +
          new Date().getHours() + ":" + new Date().getMinutes()
      });
      Alert.alert('Application Submit Successfully !')
      console.log("Document written with ID: ", docRef.id);
      setName('');
      setFName('')
      setCnic('')
      setDOB('')
      setIncom('')
      setMember('')


    }
    catch (e) {
      console.log(e)
    }



  };



  return (
    <SafeAreaView style={[styles.container, { marginTop: 140 }]}>

      <View style={styles.container}>


        <TouchableOpacity
          onPress={async () => {
            try {

              await signOut(auth);

            } catch (error) {
              console.log(error)
            }

          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              backgroundColor: "black",
              marginTop: 10,
              padding: 5,
              borderRadius: 10,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Signup !</Text>
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
          placeholder="Father Name"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setFName(text);
          }}
          value={fName}
        />
        <TextInput
          style={styles.input}
          placeholder="CNIC"
          autoCapitalize="none"
          placeholderTextColor="white"
          keyboardType="number-pad"
          onChangeText={(text) => {
            setCnic(text);
          }}
          value={cnic}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          autoCapitalize="none"
          keyboardType="number-pad"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setDOB(text);
          }}
          value={dob}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Family members"
          autoCapitalize="none"
          keyboardType="number-pad"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setMember(text);
          }}
          value={member}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Monthly Incom"
          autoCapitalize="none"
          placeholderTextColor="white"
          keyboardType="number-pad"
          onChangeText={(text) => {
            setIncom(text);
          }}
          value={incom}
        />

        <Picker
          // selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Montly" value="monthly" />
          <Picker.Item label="Daily 1 time" value="1 time" />
          <Picker.Item label="Daily 2 time" value="2 time" />
          <Picker.Item label="Daily 3 time" value="3 time" />
        </Picker>

        <TouchableOpacity style={styles.buttonOutline} onPress={() => { rashanResquest() }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#0782F9' }} >Request</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: "#333",
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 14,
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    fontSize: 40,
    color: "#333",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20
  },
  buttonOutline: {
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#0782F9',
    borderWidth: 2

  }
});
