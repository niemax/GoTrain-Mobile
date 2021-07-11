import React, { useState, useContext } from "react";
import { Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Appearance, useColorScheme } from "react-native-appearance";
import * as firebase from "firebase";
import Text from "../components/Text";
import { registration } from "../API/FirebaseMethods";
import { LottieSignup } from "../components/Lottie";

import {
  SignupContainer,
  SignupButtonContainer,
  SignIn,
  SignUp,
  Actions,
  Footer,
  AuthField,
} from "../utils/Styling";

const emptyState = () => {
  setName("");
  setEmail("");
  setPassword("");
};

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const handleSignUp = () => {
    if (!name) {
      Alert.alert("Nimi vaaditaan.");
    } else if (!email) {
      Alert.alert("Sähköposti vaaditaan.");
    } else if (!password) {
      Alert.alert("Salasana vaaditaan.");
    } else if (password.length < 6) {
      Alert.alert("Salasanan tulee olla pidempi kuin 6 merkkiä");
    } else {
      registration(name, email, password);

      emptyState();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        backgroundColor: colorScheme === "dark" ? "#141314" : "#F9F8F5",
        flex: 1,
      }}
    >
      <SignupContainer>
        <LottieSignup />
      </SignupContainer>

      <Footer>
        <ScrollView>
          <Text
            style={{
              color: "#fff",
              fontFamily: "MontserratSemiBold",
              fontSize: 24,
            }}
            marginTop="35px"
            title
          >
            Tervetuloa!
          </Text>

          <Actions>
            <Text
              left
              marginBottom="15px"
              marginTop="15px"
              style={{ color: "#fff", fontFamily: "MontserratSemiBold" }}
            >
              NIMI *
            </Text>
            <Ionicons name="md-person-add-outline" size={18} color="white" />
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              value={name}
              onChangeText={(name) => setName(name)}
            />

            <Text
              left
              marginBottom="15px"
              marginTop="35px"
              style={{ color: "#fff", fontFamily: "MontserratSemiBold" }}
            >
              SÄHKÖPOSTI *
            </Text>
            <Ionicons name="md-person-add-outline" size={18} color="white" />
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              value={email}
              onChangeText={(email) => setEmail(email)}
            />

            <Text
              left
              marginBottom="15px"
              marginTop="35px"
              style={{ color: "#fff", fontFamily: "MontserratSemiBold" }}
            >
              SALASANA *
            </Text>
            <Ionicons name="md-person-add-outline" size={18} color="white" />
            <AuthField
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus={false}
              value={password}
              secureTextEntry
              onChangeText={(password) => setPassword(password)}
            />
          </Actions>
          <SignupButtonContainer>
            <SignUp onPress={handleSignUp}>
              <Text
                medium
                style={{ color: "#000", fontFamily: "MontserratSemiBold" }}
              >
                Rekisteröidy
              </Text>
            </SignUp>
            <SignIn onPress={() => navigation.navigate("Login")}>
              <Text
                medium
                style={{ color: "#000", fontFamily: "MontserratSemiBold" }}
              >
                Kirjaudu sisään
              </Text>
            </SignIn>
          </SignupButtonContainer>
        </ScrollView>
      </Footer>
    </KeyboardAvoidingView>
  );
};

export default Signup;
