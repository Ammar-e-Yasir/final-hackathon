import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RouteNavigation from "./src/config/navigation";
import ContextProvider from "./src/context/context";

export default function App() {
  return (
    <ContextProvider>
      <RouteNavigation />
    </ContextProvider>
  );
}

const styles = StyleSheet.create({});

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, FlatList,Image,Button  } from 'react-native';

// const studentList = [
//   {
//     id:'asdsadfffg',
//   stName:'ammar',
//   rollnumber:12345,

// },
// {
//   id:'asdsadfffg',
// stName:'ammar',
// rollnumber:12345,

// },
// {
//   id:'asdsadfffg',
// stName:'ammar',
// rollnumber:12345,

// },
// {
//   id:'asdsadfffg',
// stName:'ammar',
// rollnumber:12345,

// },
// {
//   id:'asdsadfffg',
// stName:'ammar',
// rollnumber:12345,

// },
// {
//   id:'asdsadfffg',
// stName:'ammar',
// rollnumber:12345,

// },
// {
//   id:'asdsadfffg',
// stName:'ammar',
// rollnumber:12345,

// },

// ]

// export default function App() {

//   // const [studentList , setStudentList ] = useState([
//   //   {id:'asdsadfffg',name:'ammar',rollnumber:12345},
//   //   {id:'zxcvcxvcx',name:'asad',rollnumber:5353},
//   //   {id:'qweertret',name:'ali',rollnumber:21158}
//   // ]);

// // const renderItem = ({item})=>{
// //   <View style={styles.container}>
// //   {/* <Text>{item.id}</Text> */}
// //   <Text>{item.rollnumber}</Text>
// //   <Text>{item.name}</Text>
// //   </View>

// // }

//   return (
//  <FlatList
// data={studentList}
// renderItem={({item})=>{
//   return(
//   <View style={styles.item}>
//     <Image
//     source={require('./images/image-1.jpg')}
//     />
//     <View>
//       <Text>Name</Text>
//       <Text style={styles.text}>{item.stName}</Text>
//     </View>
//     <View>
//       <Text>Roll Number</Text>
//       <Text  style={styles.text}>{item.rollnumber}</Text>
//     </View>
//     <View>
//       <Text>ID</Text>
//       <Text  style={styles.text}>{item.id}</Text>
//     </View>
//     <View style={{marginTop:20,flex:1,flexDirection:'row'}}>
//     <Button
//     style={styles.button}

//     title='order'/>
//     {/* <Button

//     title='order'/>
//     <Button

//     title='order'/> */}
//     </View>
//   </View>
//   );
// }}
// //  keyExtractor={item => item.id}

// />

//       // <SignUp />
//       //  <StatusBar style="auto" />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:20,

//   },
//   item:{
//     alignItems:'center',
//     backgroundColor:'gray',
//     color:'white',
//     fontSize:32,
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,

//   },
//   text:{
//     color:'#fff'
//   },
//   button:{
//     width:'90px',
//     height:'90px'
//   }

// });
