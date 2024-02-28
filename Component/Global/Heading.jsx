import { Dimensions, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Spacer } from "./Spacer";

export const Heading = ({text}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
   <>
     <Spacer/>
     <Text style={{
       fontWeight:600,
       color:theme.colors.text,
       fontSize:width * 0.06,
     }}>{text}</Text>
     <Spacer/>
   </>
  );
};