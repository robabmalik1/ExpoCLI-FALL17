import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>       
         <Text style={{fontSize: 38}}>BIOGRAPHY </Text>
    
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24,paddingTop: 5}}>First Name:</Text>
      <Text style={{fontSize: 24,paddingTop: 5}}> Robab </Text>
    </View>
   
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24,paddingTop: 5}}>Last Name:</Text>
      <Text style={{fontSize: 24,paddingTop: 5}}> Malik</Text>
    </View>
   
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24,paddingTop: 5}}>Gender:</Text>
      <Text style={{fontSize: 24,paddingTop: 5}}> Female</Text>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24,paddingTop: 5}}>Age:</Text>
      <Text style={{fontSize: 24,paddingTop: 5}}> 21</Text>
    </View>


    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24,paddingTop: 5}}>Last Insitution:</Text>
      <Text style={{fontSize: 24,paddingTop: 5}}> Bahria College</Text>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24,paddingTop: 5}}>Current Institute:</Text>
      <Text style={{fontSize: 24,paddingTop: 5}}> Comsats Unversity</Text>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24, paddingTop: 5}}>Programme:</Text>
      <Text style={{fontSize: 24, paddingTop: 5}}> Bachelor of Computer Science</Text>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 24, paddingTop: 5}}>Contact Number:</Text>
      <Text style={{fontSize: 24, paddingTop: 5}}> +92 3334 8421429</Text>
    </View>

   

   
   
   
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
});
