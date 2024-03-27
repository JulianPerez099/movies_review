import React from "react"
import { View, StyleSheet, Image, Platform } from "react-native"
import StyledText from "../styles/StyledText"
import MoviesStats from "./MoviesStats"

const MoviesItemsHeader = ({ props }) => (
    <View style={styles.itemContainer}>
        <View style={styles.backgroundContainer}>
            {Platform.OS !== 'web' ?
                <Image
                    style={StyleSheet.absoluteFillObject}
                    source={{
                        uri: props.poster_path == null
                            ? `https://via.placeholder.com/200x140`
                            : `https://image.tmdb.org/t/p/w500${props.poster_path}`
                    }}
                    blurRadius={90}
                    resizeMode="cover"
                />
                : <Image
                    style={StyleSheet.absoluteFillObject}
                    source={{
                        uri: props.poster_path == null
                            ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
                            : `https://via.placeholder.com/200x140`
                    }}
                    blurRadius={10}
                    resizeMode="cover"
                />
            }
        </View>
        <Image
            style={styles.image}
            source={{
                uri: props.poster_path == null
                    ? `https://via.placeholder.com/200x140`
                    : `https://image.tmdb.org/t/p/w500${props.poster_path}`
            }}
        />

        <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10 }}>
            {Platform.OS !== 'web'
                ? <StyledText color='primary' fontSize='subheading' fontWeight='bold' spaceBottom='bottom' >{!props.title == '' ? props.title : props.name}</StyledText>
                : <StyledText color='secondary' fontSize='subheading' fontWeight='bold' spaceBottom='bottom' >{!props.title == '' ? props.title : props.name}</StyledText>}

            <StyledText
                style={
                    Platform.OS !== 'web'
                        ? { color: '#fff' }
                        : styles.text}
            >
                {props.overview}
            </StyledText>
        </View>
    </View>
)

const MoviesItems = (props) => {
    return (
        <View style={styles.container}>

            <MoviesItemsHeader {...props} />
            <MoviesStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 1,
    },
    itemContainer: {
        flexDirection: "row",
        paddingBottom: 2,
        position: 'relative',
    },
    backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    image: {
        width: 180,
        height: 270,
        borderRadius: 5
    },
    text: {
        fontSize: 12,
        overflow: 'hidden',
        maxWidth: '15%',
        color: '#000'
    }
})

export default MoviesItems
