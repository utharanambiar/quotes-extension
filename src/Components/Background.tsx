import React, { useEffect, useState } from "react";
import styles from "./background.module.scss";

function Background() {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&orientation=landscape&collections=nature`
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data?.urls?.regular);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <img
      src={data}
      alt="altimage"
      className={styles["background-image"]}
    />
  );
}

export default Background;
