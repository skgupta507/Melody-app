
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {RootRoute} from "./Route/RootRoute";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions } from "react-native";
const Stack = createStackNavigator()
export default function App(){
  const width = Dimensions.get("window").width
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#8EBBFF',
      text: '#F4F5FC',
      textSecondary: '#CCCCCC',
      white : "white",
      spacing : 10,
      headingSize:width * 0.085,
      fontSize:width * 0.045,
      disabled:'rgb(131,131,131)',
      background:'#24293E',
    },
  };
  return  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="LoginScreen" component={RootRoute} />
    </Stack.Navigator>
  </NavigationContainer>
}
