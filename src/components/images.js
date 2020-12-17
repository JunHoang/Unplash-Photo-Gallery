import React, { useState } from "react";

export default function Images() {
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1502394202744-021cfbb17454?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501960645408-12c9bcfca49f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1605539558089-0c14c173b015?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHw2c01WalRMU2tlUXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ]);

  const [newImageURL, setnewImageURL] = useState("");

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
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-1 flex justify-center" key={index}>
          <div className="relative">
            <i
              className="fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100"
              onClick={() => handleRemove(index)}
            ></i>
            <img src={image} width="150" />
          </div>
        </div>
      );
    });
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
