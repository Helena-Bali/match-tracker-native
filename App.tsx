import React, {useState} from "react";
import MatchListContainer from "./components/MatchListContainer";
import { SafeAreaView} from "react-native";
import type {Match} from "./types/match";
import {StyleSheet} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const App: React.FC = () => {
    const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
    const [fontsLoaded] = useFonts({
        "TacticSansBold-Italic": require("./assets/fonts/TacticSans-BldIt.ttf"),
    });
    if (!fontsLoaded) {
        return null;
    }
    SplashScreen.hideAsync();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MatchListContainer onSelectMatch={setSelectedMatch}/>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000',
        padding: 20
    }
})

export default App;
