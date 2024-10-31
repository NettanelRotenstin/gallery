import React, { useEffect, useState } from "react";
import IGalleryList from "../models/IGalleryList";
import ImageDetails from "./ImageDetails";

interface Props {
  myDetails: IGalleryList;
}

export default function ImageCard({ myDetails }: Props) {
  const [popup, setpopup] = useState(false)

  const like = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/${myDetails.id}/like?client_id=FTqLV4oa9YKfyryBjfcl1KyHPKj1T6xjxiqHCT-ZDUg`)
  }
  return (
    <div className="card">
      <img onClick={() => {
        setpopup(true)
      }}
        src={myDetails.url} />
      <p>date :{myDetails.created_at}</p>
      <p>people like :{myDetails.likes}</p>
      <button
        onClick={(e) => { like }}
        style={myDetails.liked_by_user ? { color: "white" } : { color: "blue" }}
      >
        LIKE
      </button>
      {popup && <ImageDetails setpopup={setpopup} data={myDetails} />}
    </div>
  );
}
