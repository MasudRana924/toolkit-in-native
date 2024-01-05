import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { createUserLogin } from "../../state/auth/loginSlice";

const LoginComponent = () => {
    const dispatch=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleLogin=()=>{
    const data={email,password};
    console.log("data---",data);
    dispatch(createUserLogin(data))
  }
  return (
    <View style={styles.container}>
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
        onPress={handleLogin}
        // disabled={isLoading}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingText: {
    marginTop: 16,
    color: "blue",
  },
  errorText: {
    marginTop: 16,
    color: "red",
  },
});
