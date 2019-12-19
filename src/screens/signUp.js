import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import firebase from 'firebase'

const signUp = ({navigation}) => {
[name, setName] = useState('');
[email, setEmail] = useState('');
[password, setPassword] = useState('');

require("firebase/auth");

handleSignUp = () => {
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('toHome'))
        .catch(error => console.log(error))
}

    return (
        <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={name}
                    onChangeText={newName => setName(newName)}
                    placeholder='Full Name'
                />
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={newEmail => setEmail(newEmail)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={newPassword => setPassword(newPassword)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignUp()}          >
                    <Text style={styles.buttonText}>SignUp</Text>
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
    }
});

export default signUp;