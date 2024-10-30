import React, { useEffect, useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ImageDetails from "./components/ImageDetails";

interface galleryList {
  id: string;
  created_at: string;
  likes: string;
  description: string;
  url: string;
  liked_by_user: boolean;
}

const blah = {
  id: "",
  created_at: "",
  likes: "",
  description: "",
  url: "",
  liked_by_user: false,
};

export default function GalleryApp() {
  useEffect(() => {
    data();
  }, []);
  const [page, setPage] = useState(1);
  const [galleryList, setGalleryList] = useState<galleryList[]>([blah]);
  const [id, setId] = useState("");
  const data = async () => {
    const myData = await fetch(
      `https://api.unsplash.com/photos?page=1&count=20&client_id=Ivo353OjdV9bOQDtL6dUbeCJ_rLzWXdfK7USn0oXnS8`
    );
    const strData = await myData.json();
    const ourData = strData.reduce((myList: [], item: any) => {
      const t = {
        id: item.id,
        created_at: item.created_at,
        likes: item.likes,
        description: item.description,
        url: item.urls.raw,
        liked_by_user: item.liked_by_user,
      };
      return [...myList, t];
    }, []);
    setGalleryList(() => [...ourData]);
  };

  return (
    <div>
      {galleryList.map((p) => (
        <img src={p.url}></img>
      ))}
      <p>flknnsdflk</p>
      <ImageGrid galleryList={galleryList} />
      <ImageDetails />
    </div>
  );
}
