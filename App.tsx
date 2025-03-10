import React, {useState} from "react";
import MatchListContainer from "./components/MatchListContainer";
import { SafeAreaView} from "react-native";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const App: React.FC = () => {
    const [fontsLoaded] = useFonts({
        "TacticSansBold-Italic": require("./assets/fonts/TacticSans-BldIt.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }
    SplashScreen.hideAsync();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MatchListContainer/>
        </SafeAreaView>

    );
};

export default App;
