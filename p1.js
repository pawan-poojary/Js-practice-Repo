import React from "react";
import {Text,View}from 'react-native';

const Cat=()=>{
    return <Text>I am a cat</Text>;


};

const App=()=>{
    return(
        <view>
            <text>Welcome to cat world</text>
            <Cat/>
            <Cat/>
            <Cat/>
        </view>
    );
};
export default App;