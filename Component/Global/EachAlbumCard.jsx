import { ImageBackground, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import { memo } from "react";


export const EachAlbumCard = memo(function EachAlbumCard({image,name,artists,id}) {
  let artistsNames = ""
  if (artists.length > 3){
    for (let i = 0; i < 3; i++){
      if ( i === 2){
        artistsNames += artists[i].name
      } else {
        const additionName = artists[i].name + ", "
        artistsNames += additionName
      }
    }
    artistsNames += " ..."
  } else {
    artists.map((e,i)=>{
      if (i === artists.length - 1){
        artistsNames += e.name
      } else {
        const additionName = e.name + ", "
        artistsNames += additionName
      }
    })
  }
  function formattedText (text){
    if (text.length>=45){
      return text.slice(0,45) + "..."
    }
    else {
      return text
    }
  }
  return (
    <View style={{
      borderRadius:10,
      height:230,
      width:230,
      backgroundColor:"rgba(55,55,79,0)",
      marginRight:10,
      flexDirection:"row",
      overflow:"hidden",
    }}>
      <ImageBackground source={{
        uri:image,
      }} style={{
        height:"100%",
        width:'100%',
      }}>
        <View style={{
          width:"100%",
          height:"100%",
          justifyContent:"flex-end",
          backgroundColor:"rgba(0,0,0,0.13)",
        }}>
          <View style={{
            backgroundColor:"rgba(0,0,0,0.8)",
            padding:10,
          }}>
            <PlainText text={formattedText(name)}/>
            <SmallText text={artistsNames}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
})