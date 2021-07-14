import * as React from 'react';
import { StyleSheet, Text, View, TextInput as Input, ViewStyle, TextStyle } from 'react-native';
import { MyColors } from '../../utils/theme';


type TextInputType = {
    label?: string,
    text?: string,
    onChangeText?: any,
    containerStyle?: ViewStyle,
    labelStyle?: TextStyle,
    inputStyle?: ViewStyle,
    secureTextEntry?: boolean
}

function TextInput(Props: TextInputType) {
    return (
        <View style={{ ...styles.containerInput, ...Props.containerStyle }}>
            <Text style={{ ...styles.labelInput, ...Props.labelStyle }}>{Props.label}</Text>
            <Input
                style={{ ...styles.textInput, ...Props.inputStyle }}
                onChangeText={Props.onChangeText}
                value={Props.text}
                secureTextEntry={Props.secureTextEntry}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    containerInput: {
        marginVertical: 7.5,
        width: '100%'
    },
    labelInput: {
        fontSize: 18,
        color: MyColors.gray2,
        fontWeight: '500',
        lineHeight: 18,
        marginBottom: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: '#BDBDBD',
        fontSize: 18,
        color: MyColors.gray2,
        backgroundColor: '#FFFFFF',
    }
})

export default TextInput;