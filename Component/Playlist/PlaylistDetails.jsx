import { Dimensions, View } from "react-native";
import { Heading } from "../Global/Heading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SmallText } from "../Global/SmallText";
import { Spacer } from "../Global/Spacer";
import AntDesign from "react-native-vector-icons/AntDesign";
import { PlayButton } from "./PlayButton";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";

export const PlaylistDetails = ({name,listener,liked,onPlay,Album,releasedDate,notReleased}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)', 'rgb(19,19,19)', theme.colors.background]} style={{
      padding:10,
      alignItems:"center",
      justifyContent:"space-between",
      flexDirection:"row",
    }}>
      {!notReleased && <>
        <View style={{
          paddingLeft:5,
          maxWidth:width * 0.8,
        }}>
          <Heading text={name}/>
          <View style={{flexDirection:"row",gap:5}}>
            {!Album && <Ionicons name={"musical-note"} size={16}/>}
            <SmallText text={Album ? "Released " + releasedDate : listener + " Listeners"}/>
          </View>
          <Spacer/>
          <AntDesign size={20} name={liked ? "heart" : "hearto"} color={liked ? 'rgb(227,97,97)' : theme.colors.text}/>
        </View>
        <PlayButton onPress={onPlay}/>
      </>}
    </LinearGradient>
  );
};