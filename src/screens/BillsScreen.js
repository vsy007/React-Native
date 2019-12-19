import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';

const BillsScreen = () => {
  
   var database = firebase.database();
   var ref = database.ref('expenses/');

   [userExpense=[], setUserExpense] = useState([]);

   console.log(userExpense);

    
    return(
      <View style={styles.container}>
          <View style={styles.buttonViewSave}>
              <Text style={styles.topTextStyle}>Dec</Text>
          </View>
              <TouchableOpacity
                  style={styles.buttonStyleSave}
                  onPress={ ()=> { 
                       ref.on('value', function(snapshot){
                       const dataFromFirebase = snapshot.val();                      
                       const newArr = Object.keys(dataFromFirebase).map((key) => {
                       dataFromFirebase[key].id = key;
                       return dataFromFirebase[key];
                  });          
                       setUserExpense(newArr);  
                   });                    
                  }}>
                  <Text style={styles.TextStyle}>See userExpense</Text>
             </TouchableOpacity>
          <View>
              <FlatList
                 keyExtractor={userExpense => userExpense.id}
                 data={userExpense}
                 renderItem={({item}) => {
                 return <View style={styles.listView}>
                           <View style={styles.text1}>
                            <Text>{item.item}</Text>
                           </View>
                           <View style={styles.text2}> 
                            <Text>{'\u20B9'}{item.amount}</Text>
                           </View>
                           <View style={styles.text3}> 
                            <Text>{item.date}</Text>
                           </View> 
                        </View>
                 }}
              />
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: "center",
    flex: 1,
    marginBottom: 80
  },
  listView: {
   justifyContent: 'flex-start',
   flexDirection: 'row',
   marginLeft: 8,
   marginTop: 5,
   width: 310,
   height: 36,
   borderWidth: 1,
   borderRadius: 10,
   borderColor: 'black',
   paddingTop: 5,
   backgroundColor: '#f6f2f9'
  },
  text1: {
    flex: 53,
    height: 36,
    marginLeft: 7,
    fontSize: 18,
    fontWeight: '500'
  },
  text2:{
    flex: 17,
    height: 36,
    fontSize: 18,
    fontWeight: '500'
  },
  text3:{
    flex: 30,
    height: 36,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '500',
  },

  buttonViewSave: {
    marginTop: 17,
    marginLeft: 100,
    fontSize:18,
    width: 150,
    height: 50
  },
  topTextStyle:{
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
 },
  item : {
    backgroundColor: 'black'
  }
    
});

export default BillsScreen;