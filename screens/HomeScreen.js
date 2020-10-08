import React from 'react';
import {View, Text, Button} from 'react-native';
import HeaderBar from '../components/HeaderBar';

const HomeScreen = ({navigation}) => {
    return (
        <>
            <HeaderBar navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 52 , textAlign:'center'}}>Home page</Text>
            </View>
        </>
    );
};

export default HomeScreen;
