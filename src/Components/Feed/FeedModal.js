import React, { useEffect } from "react";
import { PHOTO_GET } from "../../Hooks/api";
import useFetch from "../../Hooks/UseFetch";
import styles from "./FeedModal.module.css";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return <div className={styles.modal}></div>;
};

export default FeedModal;
