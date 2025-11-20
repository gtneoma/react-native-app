import { Text, TouchableOpacity} from "react-native";
import style from './Button.style'

interface IButtonProps {
    children: any;
    meta?: string;
    obligatoire: undefined | any;
    bgcolor: 'tomato' | 'skyblue' | string;
    onButtonClick:() => undefined
}
const Button:React.FC<IButtonProps> = ({children, bgcolor = 'tomato', onButtonClick}) => {
    console.log(children)
    return (
    <TouchableOpacity style={[style.container, {backgroundColor: bgcolor}]} onPress={onButtonClick}>
        <Text style={style.text}>
            {children}
        </Text>
        </TouchableOpacity>
    );
}

export default Button;