import React, { useEffect, useState } from "react";
import { Quote } from "../types";

function Quotes() {
  const [data, setData] = useState<Quote>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://quotes-api-self.vercel.app/quote")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false)
      });
  }, []);

  return (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>{`${data?.quote}- ${data?.author}`}</div>
      )}
    </>
  );
}

export default Quotes;
