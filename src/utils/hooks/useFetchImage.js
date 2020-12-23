import { data } from "autoprefixer";
import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetchImage(page) {
  const url = process.env.REACT_APP_UNPLASH_URL;
  const key = process.env.REACT_APP_UNPLASH_KEY;

  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`${url}/?client_id=${key}&page=${page}`).then((res) => {
      setImages([...images, ...res.data]);
      setIsLoading(false);
    }).catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
    })
  }, [page]);

  return [images, setImages, errors, isLoading];
}
