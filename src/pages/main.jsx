import React from "react";
import { View, Platform } from "react-native";
import MoviesList from "../components/MoviesList";
import Constants from "expo-constants";

const Main = () => {
    return (
        <View style={[{ marginTop: Constants.statusBarHeight }, Platform.OS === 'web' && { flex: 1 }]}>
            <MoviesList />
        </View>
    );
}

export default Main