import React, { useState } from "react";
import styles from "./home.module.css";
import DailyInfoCard from "../../components/DailyInfoCard/DailyInfoCard";
import Header from "../../components/Header/Header";
import RoomInfoCard from "../../components/RoomInfoCard/RoomInfoCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../../data/roomCard.json";
import img from "../../images/loader.gif";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import newRoomData from "../../data/newRoom.json";

export default function Home() {
  const [itemVisible, setItemVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);
  return (
    <>
      {loaderVisibility ? (
        <div className={styles.loderVisible}>
          <img src={img} alt="" />
        </div>
      ) : (
        ""
      )}
      <Header />
      <div className={styles.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={styles.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="me-2" /> START A ROOM
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => item.id === cardId)}
        setItemVisible={(item) => setItemVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
      />

      <BottomSheet
        sheetTitle="new room"
        setSheetVisible={(item) => setSheetCreateRoom(item)}
        sheetVisible={sheetCreateRoom}
        cardDetail={newRoomData}
        setItemVisible={(item) => setItemVisible(item)}
      />
    </>
  );
}
