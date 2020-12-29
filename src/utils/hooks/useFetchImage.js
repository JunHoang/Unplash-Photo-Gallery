import Axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchImage(page, searchTerm) {
  const api = process.env.REACT_APP_UNPLASH_API;
  const key = process.env.REACT_APP_UNPLASH_KEY;

  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    Axios.get(`${api}/photos?client_id=${key}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
      });
  }, [page]);

  useEffect(() => {
    if (searchTerm === null) return;

    Axios.get(
      `${api}/search/photos?client_id=${key}&page=${page}&query=${searchTerm}`
    )
      .then((res) => {
          setImages([...res.data.results]);
        setIsLoading(false);
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
        setIsLoading(false);
      });
  }, [searchTerm]);

  return [images, setImages, errors, isLoading];
}
