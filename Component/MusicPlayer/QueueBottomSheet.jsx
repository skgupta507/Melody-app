import React, { useContext, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Context from "../../Context/Context";
import { QueueRenderSongs } from "./QueueRenderSongs";

const QueueBottomSheet = () => {
  const { Queue } = useContext(Context)
  const backgroundColor = 'rgba(16,16,16,0.58)'
  const bottomSheetRef = useRef(null);
  const {QueueIndex} = useContext(Context)
  return (
      <BottomSheet
        enablePanDownToClose={false}
        index={QueueIndex}
        animateOnMount={false}
        snapPoints={['19%', '50%']}
        ref={bottomSheetRef}
        style={{
          backgroundColor,
        }}
        handleIndicatorStyle={{
          backgroundColor:"rgba(255,255,255,0.97)",
        }}
        backgroundStyle={{
          backgroundColor:backgroundColor,
        }}
        handleStyle={{
          backgroundColor:backgroundColor,
        }}
      >
        <QueueRenderSongs key={1} Queue={Queue}/>
      </BottomSheet>
  );
};



export default QueueBottomSheet;
