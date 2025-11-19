import { Text, View } from "react-native";
import style from './Button.style'

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

export default Button;