import { StyleSheet, Text, View } from "react-native";

interface IButtonProps {
    children: any;
    meta?: string;
    obligatoire: undefined | any;
}
const Button:React.FC<IButtonProps> = ({children}) => {
    return (
    <View style={style.container}>
        <Text style={style.text}>
            {children}
        </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    text: {
        color: 'darkgreen'
    }
})
export default Button;