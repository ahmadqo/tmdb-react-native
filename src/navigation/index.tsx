import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/Auth';

// import DetailScreen from '../screens/DetailScreen';
// import Test from '../screens/Test';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true);

  // Check Authentication Status
  // const checkAuth = async () => {
  // try {
  //   const token = await AsyncStorage.getItem('authToken');
  //   setIsAuthenticated(!!token);
  // } catch (error) {
  //   console.error('Error checking auth token:', error);
  //   setIsAuthenticated(false);
  // }
  // };

  // useEffect(() => {
  // checkAuth();
  // }, []);

  useEffect(() => {
    // const unsubscribe = auth().onAuthStateChanged(user => {
    //   setIsAuthenticated(user);
    // });
    // return unsubscribe;
  }, []);

  // Show loading indicator while checking auth status
  // if (isAuthenticated === null) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color="#007BFF" />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName="Home"
      >
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
