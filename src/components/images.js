import Axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "./image";

export default function Images() {
  const [images, setimages] = useState([]);

  const inputRef = useRef(null);
  const [newImageURL, setnewImageURL] = useState("");

  useEffect(() => {
    inputRef.current.focus();
    Axios.get(
      "https://api.unsplash.com/photos/?client_id=wamrH9s9tvasRKNiL56EIJ_0K6Dmo2nVVm_GyIQGiyQ"
    ).then((res) => {
      setimages(res.data);
    });
  }, []);


  function handleAdd() {
    if (newImageURL !== "") {
      setimages([...images, newImageURL]);
      setnewImageURL("");
    }
  }

  function handleChange(event) {
    setnewImageURL(event.target.value);
  }

  function handleRemove(index) {
    // setimages(images.filter((image,i) => i !== index));

    setimages([
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
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
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
