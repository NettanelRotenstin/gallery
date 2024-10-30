import React from "react";
import IGalleryList from "../models/IGalleryList";

interface Props {
  myDetails: IGalleryList;
}

export default function ImageCard({ myDetails }: Props) {
  return (
    <div>
      <img src={myDetails.url} />
      <p>date :{myDetails.created_at}</p>
      <p>people like :{myDetails.likes}</p>
      <div
        onClick={() => {}}
        style={myDetails.liked_by_user ? { color: "white" } : { color: "blue" }}
      >
        pp 👍
      </div>
    </div>
  );
}
