import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
    isGreen?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray, isGreen }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity 
            style={
                isBlue 
                ? Styles.btnBlue 
                : isGray 
                ? Styles.btnGray 
                : isGreen 
                ? Styles.btnGreen // Added logic for green button
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue || isGray || isGreen // Updated condition to apply green text styling as well
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
