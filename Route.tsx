import React, { useContext, useState } from 'react';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SIgnUp';
import SignIn from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/color';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favourites from './src/screens/app/Favourites';
import Profile from './src/screens/app/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListings from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';
import { UserContext } from './App';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateListings"
        component={CreateListings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyListings"
        component={MyListings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'ProfileStack') {
            iconName = focused ? 'person-sharp' : 'person-outline';
          }
          return iconName ? (
            <Ionicons name={iconName} size={24} color={colors.blue} />
          ) : null;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: colors.lightGray },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const { user } = useContext<any>(UserContext);
  console.log('user Routes', user);
  const token: boolean = true
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={SignUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin"
                component={SignIn}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default React.memo(Routes);
