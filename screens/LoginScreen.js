import React from 'react';
import {View, Text} from 'react-native';
import HeaderBar from '../components/HeaderBar';


function LoginScreen({navigation}) {
    return (
        <>
            <HeaderBar navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 52}}>Login page</Text>
            </View>
        </>
    );
}

export default LoginScreen;
