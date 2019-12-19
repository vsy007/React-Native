import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

var firebase = require("firebase/app");


const Components = ({navigation}) => {

  const firebaseConfig = {
    apiKey: "AIzaSyAC4SVbX37X-MMOxsfeN-Ww6Aj9Y0vpeIg",
    authDomain: "mexchange-bd480.firebaseapp.com",
    databaseURL: "https://mexchange-bd480.firebaseio.com",
    projectId: "mexchange-bd480",
    storageBucket: "mexchange-bd480.appspot.com",
    messagingSenderId: "798381420281",
    appId: "1:798381420281:web:2669392c794922f7c53c28"
  };

  firebase.initializeApp(firebaseConfig);
  
    return(
      <View style={styles.container}>
       <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=> navigation.navigate('expense')}>
              <Text style={styles.TextStyle}>NOTE SPENDING</Text>
            </TouchableOpacity>  
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=> navigation.navigate('bills')}>
              <Text style={styles.TextStyle}>VIEW SPENDINGS</Text> 
            </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={()=> navigation.navigate('login')}>
              <Text style={styles.TextStyle}>log in</Text> 
            </TouchableOpacity>
        </View>
      </View>  
    );
};

const styles = StyleSheet.create({
  buttonView: {
    marginTop: 25,
    fontSize:20,
    width: 235,
    height: 50
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 80
  },
  buttonStyle: {
    width: 250,
    height: 55,
    marginTop:13,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#9c73ba',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle:{
    fontSize: 14,
    fontWeight: '500',
    color:'white',
    textAlign:'center',
}
});

export default Components;