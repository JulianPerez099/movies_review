import React from "react";
import { Platform, View } from "react-native";
import StyledText from "../styles/StyledText";

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / (10)}k`
        : String(value)
}

const MoviesStats = ({ props }) => {
    return (
        <View style={Platform.OS != 'web' ? { flexDirection: 'row', justifyContent: "space-around", } : { flexDirection: 'row', justifyContent: "space-around", maxWidth: '25%' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>Clasificación</StyledText>
                <StyledText align='center' >{props.adult === false ? 'Todos' : 'Adultos'}</StyledText>
            </View>

            <View>
                <StyledText align='center' fontWeight='bold'>Popularidad</StyledText>
                <StyledText align='center' >{parseThousands(props.popularity)}</StyledText>
            </View>
            {/* 
            <View>
                <StyledText align='center' fontWeight='bold'>Votos</StyledText>
                <StyledText align='center' >{parseThousands(props.vote_count)}</StyledText>
            </View> */}

            <View>
                <StyledText align='center' fontWeight='bold'>Calificación</StyledText>
                <StyledText align='center' >{parseThousands(props.vote_average)}</StyledText>
            </View>

            {/* <View>
                <StyledText align='center' fontWeight='bold'>F. Lanzamiento</StyledText>
                <StyledText align='center' >{!props.first_air_date == '' ? props.first_air_date : 'Sin información'}</StyledText>
            </View> */}
        </View>
    );
};

export default MoviesStats;