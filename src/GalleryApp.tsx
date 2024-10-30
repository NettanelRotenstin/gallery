import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ImageDetails from "./components/ImageDetails";

interface galleryList {}

export default function GalleryApp() {
  const [galleryList, setGalleryList] = useState<any>(null);
  const [id, setId] = useState("");
  return (
    <div>
      <ImageGrid />
      <ImageDetails />
    </div>
  );
}
