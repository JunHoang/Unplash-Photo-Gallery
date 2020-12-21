import React, { useEffect, useRef, useState } from "react";
import useFetchImage from "../utils/hooks/useFetchImage";
import Image from "./image";


export default function Images() {

  const [page, setPage] = useState(1)
  const [images, setImages] = useFetchImage(page);

  const inputRef = useRef(null);
  const [newImageURL, setnewImageURL] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  function handleAdd() {
    if (newImageURL !== "") {
      setImages([...images, newImageURL]);
      setnewImageURL("");
    }
  }

  function handleChange(event) {
    setnewImageURL(event.target.value);
  }

  function handleRemove(index) {
    // setimages(images.filter((image,i) => i !== index));

    setImages([
      ...images.slice(0, index),
      ...images.slice(index + 1, images.slength),
    ]);
  }

  function ShowImage() {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  }

  return (
    <section>
      <div className="gap-0" style={{columnCount: 5}}>
        <ShowImage />
      </div>
      <button onClick={()=>setPage(page + 1)} >Load More</button>
      <div className="flex justify-between">
        <div className="w-full">
          <input
            type="text"
            id="inputBox"
            ref={inputRef}
            className="p-1 my-5 border border-gray-800 shadow rounded w-full"
            onChange={handleChange}
            value={newImageURL}
          />
        </div>

        <div className="">
          <button
            disabled={newImageURL === ""}
            className={`p-1 my-5 ml-5 text-white
          ${newImageURL !== "" ? "bg-green-600" : "bg-green-300"}`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
