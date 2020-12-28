import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetchImage(page, searchTerm) {
  const api = process.env.REACT_APP_UNPLASH_API;
  const key = process.env.REACT_APP_UNPLASH_KEY;

  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const url = searchTerm === null ? 'photos' : 'search/photos'

    Axios.get(`${api}/${url}?client_id=${key}&page=${page}&query=${searchTerm}`)
    .then((res) => {
      if(searchTerm) {
        setImages([ ...res.data.results]);
      } else {
        setImages([...images, ...res.data]);
      }
      setIsLoading(false);
    }).catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
    })
  }, [page, searchTerm]);

  return [images, setImages, errors, isLoading];
}
