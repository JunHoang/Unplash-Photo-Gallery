import React, { useState } from "react";

export default function Images() {

  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1502394202744-021cfbb17454?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501960645408-12c9bcfca49f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1605539558089-0c14c173b015?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OHw2c01WalRMU2tlUXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ]);

  const [newImageURL, setnewImageURL] = useState("")

  function handleAdd() {
    setimages([
      ...images,
      newImageURL
    ]);
    setnewImageURL("");
  }

  function handleChange(event) {
    setnewImageURL(event.target.value);
  }

  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="w-1/3 my-1">
          <img src={image} width="150"/>
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
        <input 
          type="text" 
          className="p-1 my-5 border border-gray-800 shadow rounded" 
          onChange={handleChange} 
          value={newImageURL}/>
        <button className="p-1 my-5 bg-green-600 text-white" onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}
