import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import DatePicker from 'react-native-datepicker'



const ExpenseScreen = () => {
    
    [purpose, setPurpose] = useState('');
    [amount, setAmount] = useState('');
    [selectedDate, setDate] = useState('');


    return(
      <View style={styles.container}>
          <View style={styles.buttonViewSave}>
              <Text style={styles.topTextStyle}>NEW SPENDING</Text>
          </View>
          <TextInput
              style={styles.inputStyle}
              placeholder="For..."
              placeholderTextColor="#9c73ba"
              autoCorrect={false}
              value={purpose}
              onChangeText={newPurpose=>setPurpose(newPurpose)}
          />
          <TextInput
              style={styles.inputStyle}
              placeholder="Amount..."
              placeholderTextColor="#9c73ba"
              keyboardType='numeric'
              value={amount}
              onChangeText={newAmount=>setAmount(newAmount)}
          />
          
        
          <DatePicker  
              format="DD/MM/YYYY"
              style={{
                width: 290,
                height: 55,
                marginTop:20,
                marginLeft: 39,
              }}
              minDate="01/01/2019"
              maxDate="01/01/2021"
              placeholder="Date..."
              onDateChange={newDate => setDate(newDate)}
              date={selectedDate}
              value={selectedDate}

              customStyles={{
              dateInput:{
                width: 250,
                height: 55,
                marginTop:20,
                paddingTop:15,
                paddingBottom:16,
                paddingLeft:15,
                borderRadius:10,
                borderWidth: 1,
                borderColor: 'black',
                fontSize: 18
              },
              dateIcon: {
                marginTop: 15
              } ,
              dateText: {
                color: '#9c73ba',
                paddingRight: 133,
                fontSize: 18,
                fontWeight: '400'
              },
              placeholderText: {
                color: '#9c73ba',
                paddingRight: 178,
                fontSize: 18,
                fontWeight: '400'              }        
            }}
              
          />
              

          <View style={styles.buttonViewSave}>
              <TouchableOpacity
                  style={styles.buttonStyleSave}
                  onPress={ ()=> {
                     var database = firebase.database();
                     database.ref('expenses/'+Math.floor(Math.random()*10) + 1).set({
                        item: purpose,
                        amount: amount,
                        date : selectedDate
                      });

                    console.log(purpose, amount, selectedDate);
                    setPurpose(null);
                    setAmount(null);
                    setDate(null);
                    console.warn('saved successfully');
                  }}>
                  <Text style={styles.TextStyle}>SAVE</Text>
              </TouchableOpacity>
          </View>
        
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginBottom: 80
      },
    inputStyle: {
        width: 250,
        height: 55,
        marginTop:20,
        paddingTop:15,
        paddingBottom:16,
        paddingLeft:15,
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 18,
        fontWeight: '400',
        color: '#9c73ba'
      },
    buttonViewSave: {
        marginTop: 10,
        fontSize:18,
        width: 150,
        height: 50
      },
    buttonStyleSave: {
        width: 125,
        height: 40,
        alignItems: "center",
        marginTop: 12,
        marginLeft: 14,
        paddingTop: 10,
        backgroundColor:'#9c73ba',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
      },
    TextStyle:{
        fontSize: 15,
        fontWeight: '500',
        color:'white',
        textAlign:'center',
      },
    topTextStyle:{
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    }

    
});

export default ExpenseScreen;