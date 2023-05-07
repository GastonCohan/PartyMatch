import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatScreen from './src/screens/ChatScreen';
import EventsScreen from './src/screens/EventsScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import homeIcon from './src/assets/homeIcon.png'
import chatIcon from './src/assets/chatIcon.png'
import eventsIcon from './src/assets/eventsIcon.png'
import profileIcon from './src/assets/profile.png'
import { Image } from 'react-native';
import EventDescription from './src/screens/DescriptionScreen';
import MatchScreen from './src/screens/MatchScreen';
import ForgetPassword from './src/screens/ForgetPasswordScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2E336A',
        }}>
      <Tab.Screen name="Home2" component={HomeScreen} 
          options={{
          tabBarLabel: 'Home2',
          tabBarIcon: ({color}) => (
            <Image source={homeIcon} style={{height:20, width: 20}}/>
          ),
        }}/>
      <Tab.Screen name="Chat" component={ChatScreen} 
       options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({color}) => (
          <Image source={chatIcon} style={{height:20, width: 20}}/>
        ),
      }}/>
      <Tab.Screen name="Events" component={EventsScreen} 
      options={{
        tabBarLabel: 'Events',
        tabBarIcon: ({color}) => (
          <Image source={eventsIcon} style={{height:20, width: 20}}/>
        ),
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <Image source={profileIcon} style={{height:20, width: 20}}/>
        ),
      }}/>
    </Tab.Navigator>
  );
}

const App = () => {
  const user = true

  return (
      <NavigationContainer>
      <Stack.Navigator 
          screenOptions={{
           headerShown: false
           }}>
        {/* {user ? 
        <> */}
        <Tab.Screen name="Home" component={HomeStack}/>
        <Stack.Screen name="Event" component={EventDescription}/>
        <Stack.Screen name="Match" component={MatchScreen}/>
        {/* </>
        :
        <> */}
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="ResetPassword" component={ForgetPassword}/>
        {/* <Stack.Screen name="Perfil" component={PerfilScreen}/> */}
        {/* </>
        } */}
       </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
