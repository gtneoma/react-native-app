import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 12
    },

    image: {
        width: 100,
        height: 100
    },

    text: {
        flex: 1,
        flexGrow: 1,
        alignContent: 'center',
        padding: 12
    },

    stockPositive: {
        color: 'green',
    },
     stockNull: {
        color: 'red',
    },
})

export default style