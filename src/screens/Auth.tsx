import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  View,
  Alert,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
// import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    setLoading(true);
    // try {
    //   await auth().signInWithEmailAndPassword(email, password);
    //   Alert.alert('Login Successful', 'Welcome to the app!');
    // } catch (error: any) {
    //   Alert.alert('Login Failed', error.message || 'An error occurred');
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleSignUp = async () => {
    setLoading(true);
    // try {
    //   await auth().createUserWithEmailAndPassword(email, password);
    //   Alert.alert('Sign Up Successful', 'Account created successfully!');
    // } catch (error: any) {
    //   Alert.alert('Sign Up Failed', error.message || 'An error occurred');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <ImageBackground
      source={require('../assets/images/auth_bg.jpg')}
      style={styles.container}
      resizeMode="cover" // Options: cover, contain, stretch, center
    >
      <BlurView
        style={styles.blurOverlay}
        blurType="dark" // Options: 'light', 'dark', 'xlight'
        blurAmount={10} // Adjust for more/less blur
        reducedTransparencyFallbackColor="white"
      />
      <Text style={styles.title}>MOVIE QU</Text>
      <Text style={styles.subtitle}>
        Unlimited viewing of movies, TV shows and more
      </Text>
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.buttonOr}>or</Text>
      <TouchableOpacity style={styles.googleButton} onPress={handleSignUp}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#15141F',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  line: {
    height: 6,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 70,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'orange',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  googleButton: {
    width: '100%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#db4437',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonOr: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default LoginScreen;
