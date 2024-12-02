// // src/services/authService.ts
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
// });

// export const signInWithGoogle = async () => {
//   const {idToken} = await GoogleSignin.signIn();
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   return auth().signInWithCredential(googleCredential);
// };

// export const signInWithEmail = async (email: string, password: string) => {
//   return auth().signInWithEmailAndPassword(email, password);
// };

// export const signOut = async () => {
//   await auth().signOut();
// };

// export const getCurrentUser = () => auth().currentUser;
