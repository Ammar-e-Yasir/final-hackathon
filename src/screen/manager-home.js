import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import { auth,signOut } from '../config/firebase';

export default function ManagerHome () {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                 
<TouchableOpacity
          onPress={async() => {
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
            <Text>Manager Home</Text>
        </View>
    )
}

