import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { validateEmail } from "../utils/index";
const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, setEmail] = React.useState("");

  const hamdleSubcribe = () => {
    setEmail("");
    Alert.alert("Thanks for subscribing, stay tuned!");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.styleImage}
        source={require("../assets/little-lemon-logo-grey.png")}
        resizeMode="contain"
      />
      <View style={styles.innerContainer}>
        <Text style={styles.subText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.inputBox}
          placeholder="Type your email..."
          inputMode="email"
          clearButttonMode="while-editing" //ios only
        />
        <Pressable
          onPress={hamdleSubcribe}
          style={[
            styles.btn,
            validateEmail(email)
              ? { backgroundColor: "black" }
              : { backgroundColor: "grey" },
          ]}
          disabled={validateEmail(email) ? false : true}
        >
          <Text style={styles.btnText}>Subcribe</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  innerContainer: {
    flex: 0.3,
    alignItems: "center",
    width: "100%",
  },
  styleImage: {
    flex: 0.3,
    width: 150,
    height: 150,
  },
  subText: {
    paddingHorizontal: 30,
    fontSize: 22,
    color: "black",
    textAlign: "center",
  },
  inputBox: {
    marginVertical: 25,
    width: "80%",
    padding: 10,
    border: "black",
    borderWidth: 2,
    color: "black",
    borderRadius: 10,
    borderCurve: "continous",
    fontWeight: "bold",
  },
  btn: {
    width: "80%",
    borderRadius: 10,
    padding: 8,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
