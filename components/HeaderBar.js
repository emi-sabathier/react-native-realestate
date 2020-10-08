import React from 'react';
import {Appbar} from 'react-native-paper';

const HeaderBar = ({navigation}) => {
    const toggleMenu = () => {
        navigation.toggleDrawer();
    };
    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={toggleMenu} />
            <Appbar.Content title="Ma super App" subtitle="qui tue sa race" />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
    );
};
export default HeaderBar;
