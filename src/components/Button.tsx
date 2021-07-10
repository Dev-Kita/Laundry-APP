import React from "react";
import { StyleSheet, Text, TouchableHighlight, ViewStyle, TouchableOpacity, TextStyle } from "react-native";
import { MyColors, MyTheme } from "../utils/theme";

type PropsType = {
    onPress: () => void,
    text?: string,
    buttonStyle?: ViewStyle,
    textStyle?: TextStyle
}

function Button(Props: PropsType) {
    return (
        <TouchableOpacity
            activeOpacity={0.05}
            onPress={() => {
                Props.onPress()
            }}

            style={{ ...styles.button, ...Props.buttonStyle }}
        >
            <Text style={{ ...styles.buttonText, ...Props?.textStyle }}>{Props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: MyTheme.colors.primary,
        borderRadius: 10,
        marginVertical: 7.5,
        width: '100%'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '700',
        lineHeight: 18,
        paddingVertical: 20,
    }
})

export default Button;