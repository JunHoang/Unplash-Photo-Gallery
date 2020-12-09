import React from "react";

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1502394202744-021cfbb17454?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1501960645408-12c9bcfca49f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1534384671-0a91d6232ae3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fG91dGRvb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    });
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
      </div>
    </section>
  );
}
