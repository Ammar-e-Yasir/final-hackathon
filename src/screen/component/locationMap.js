import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker,Circle } from 'react-native-maps';


export default function LocationMap({ title }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [distance, setDistance] = useState(null);
    
 

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();













    }, []);
    console.log(location)

  
    //     function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    //         var R = 6378.137; // Radius of earth in KM
    //         var dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    //         var dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    //         var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    //         Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    //         Math.sin(dLon/2) * Math.sin(dLon/2);
    //         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    //         var d = R * c;
    //         // setDistance(d)
    //         if(d> 1000){
    //             Alert.alert('You are in Safe Area !')
    //         }
    //         else{
    //             Alert.alert('You are in Danger Area !')
    //         }

    //     }
  

    
    
    // {
    //     location ? measure(location.coords.latitude,location.coords.longitude,location.coords.latitude-100,location.coords.longitude+1000) : null
 
    // }




    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
        <View style={styles.container}>
            {/* <Text>{text}</Text> */}
            {location ?
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                    maxZoomLevel={20}
                    minZoomLevel={20}
                >
                    




                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                    >



                    </Marker>

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                    >



                    </Marker>

                    <Marker
                        coordinate={{
                            branch_name: "Hill park",
                            latitude: 24.8673515,
                            longitude: 67.0724497
                            
                        
                        }}
                        title={"Hill park"}
                    >



                    </Marker>
                    <Marker
                        coordinate={{
                            
                                branch_name: "Aliabad",
                                latitude: 24.9200172,
                                longitude: 67.0612345
                            
                        
                        }}
                        title={"Aliabad"}
                    >



                    </Marker>
                    <Marker
                        coordinate={{
                            
                                branch_name: "Numaish chowrangi",
                                latitude: 24.8732834,
                                longitude: 67.0337457
                            
                        
                        }}
                        title={"Numaish chowrangi"}
                    >



                    </Marker>



                          


                </MapView> : null
            }

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
});