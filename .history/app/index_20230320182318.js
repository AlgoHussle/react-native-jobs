import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";



const Home = () => {
    const router = useRouter();


    return (
        <SafeAreaView style={{ flex}}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}


export default Home;