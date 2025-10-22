import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/services/firebaseConfig";

export function LoginEmail() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert("Login realizado com sucesso!");
    } catch (error: any) {
      Alert.alert("Erro ao fazer login", error.message);
    }
  }

  return (
    <View style={{ width: "80%", gap: 12 }}>
      <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
