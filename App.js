import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={HomeScreen}
                              drawerStyle={{
                                  width: 240,
                              }}
                              screenOptions={{
                                  headerStyle: {
                                      backgroundColor: '#f4511e',
                                  },
                                  headerTintColor: '#fff',
                                  headerTitleStyle: {
                                      fontWeight: 'bold',
                                  },
                              }}
            >
                <Drawer.Screen name="Home" component={HomeScreen}
                               options={{ title: 'Accueil', drawerIcon: ()=>
                                       <Icon name="home" size={20} color={'darkblue'} /> }}
                />
                <Drawer.Screen name="Login" component={LoginScreen} options={{ title: 'Se connecter'}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
