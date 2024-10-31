import React from "react";
import ImageCard from "./ImageCard";
import IGalleryList from "../models/IGalleryList";

interface Props {
  galleryList: IGalleryList[];
}

export default function ImageGrid({ galleryList }: Props) {
  return (
    <div className="grid">
      {galleryList.map((p) => (
        <ImageCard myDetails={p} />
      ))}
    </div>
  );
}
