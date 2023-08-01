import React, { useState, useEffect } from "react";
// import { GiftEntity } from "../../types/gifts";
import { GiftsTable } from "./GiftsTable";
import { GiftEntity } from "types";

export const GiftsList = () => {
  const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

  const refreshGifts = async () => {
    setGiftsList(null);
    const res = await fetch("http://localhost:3001/gift");
    const data = await res.json();
    setGiftsList(data.giftsList);
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (giftsList === null) {
    return (
      <div style={{ margin: "30px", textAlign: "center" }}> Loading...</div>
    );
  }

  return (
    <>
      <h1>Gifts</h1>
      <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts} />
    </>
  );
};