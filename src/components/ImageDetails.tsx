import React from "react";
import IGalleryList from "../models/IGalleryList";
interface Props {
  data: IGalleryList
  setpopup: (flag: boolean) => void
}
export default function ImageDetails({ data, setpopup }: Props) {
  return (
    <div className="details">
      <button style={{backgroundColor:"red"}} onClick={() => { setpopup(false) }}>X</button>
       <p>Upload date: {data.created_at}</p>
       <br />
       <p>Description: {data.description}</p>
    </div>)
}
