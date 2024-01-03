import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRegister } from './userSLice';
const RegisterComponent = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFirstNameChange = (text) => {
      setFirstName(text);
    };
  
    const handleLastNameChange = (text) => {
      setLastName(text);
    };
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };
  
    const handleTextInputChange = (text) => {
      setFirstName(text);
    };
    const handleRegister = () => {
        const data={firstName,lastName,email,password}
        dispatch(createUserRegister(data));
    };
    return (
        <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={handleFirstNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={handleLastNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
    );
};

export default RegisterComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '50%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 12,
      paddingLeft: 8,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      width: '50%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    loadingText: {
      marginTop: 16,
      color: 'blue',
    },
    errorText: {
      marginTop: 16,
      color: 'red',
    },
  });
  