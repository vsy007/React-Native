import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import firebase from 'firebase'

const login = ({navigation}) => {
[email, setEmail] = useState('');
[password, setPassword] = useState('');

require("firebase/auth");

handleLogin = () => {
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('expense'))
        .catch(error => console.log(error))
}

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={newEmail => this.setEmail(newEmail)}
            placeholder='Email'
            placeholderTextColor='#bfbfbf'
            autoCapitalize='none'
        />
        <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={newPassword => this.setPassword(newPassword)}
            placeholder='Password'
            placeholderTextColor='#bfbfbf'
            secureTextEntry={true}
        />
        <TouchableOpacity 
             style={styles.button}
             onPress={handleLogin()}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
             style={styles.opacityStyle}
             onPress={()=> navigation.navigate('signUp')}>
            <Text style={styles.loginTextStyle}>Don't have an account yet? Sign Up.</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        width: 125,
        height: 40,
        alignItems: "center",
        marginTop: 12,
        marginLeft: 14,
        paddingTop: 10,
        backgroundColor:'#9c73ba',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 23
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        color:'white',
        textAlign:'center',
    },
    opacityStyle:{
        marginTop: 10,
    },
    loginTextStyle:{
        color: '#8c8cff',
        fontSize: 15
    }


    
});

export default login;