import React from "react";
import styles from "./BottomSheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import StartRoom from "../Bottom_Sheet_Comp/StartRoom";
import NewRoom from "../Bottom_Sheet_Comp/NewRoom/NewRoom";

export default function BottomSheet({
  sheetVisible,
  sheetTitle,
  setSheetVisible,
  setItemVisible,
  setSheetCreateRoom,
  cardDetail,
}) {
  return (
    <SwipeableBottomSheet
      open={sheetVisible}
      onChange={() => {
        setSheetVisible(!sheetVisible);
        setItemVisible(true);
      }}
      fullScreen={sheetTitle === "room detail" ? true : false}
    >
      <div
        className={styles.BottomSheetChontainer}
        style={{
          backgroundColor: sheetTitle === "profile" ? "transparent" : "",
        }}
      >
        {sheetTitle === "new room" ? (
          <NewRoom
            cardDetail={cardDetail}
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemVisible(true);
            }}
          />
        ) : sheetTitle === "start room" ? (
          <StartRoom
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemVisible(true);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </SwipeableBottomSheet>
  );
}
