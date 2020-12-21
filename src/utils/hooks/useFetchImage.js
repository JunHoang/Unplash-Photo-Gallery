import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetchImage() {

    const url = process.env.REACT_APP_UNPLASH_URL;
    const key = process.env.REACT_APP_UNPLASH_KEY;

    const [images, setImages] = useState([]);

    useEffect(() => {
        Axios.get(
            `${url}/?client_id=${key}`
        ).then((res) => {
          setImages(res.data);
        });
    }, [])

    return [images, setImages];
}
