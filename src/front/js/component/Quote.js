import React, { useState, useEffect } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    // fetch("https://zenquotes.io/api/random/")
    //   .then((res) => res.json())
    //   .then((data) => setQuote(data.h))
    //   .catch((err) => console.error(err));
    // console.log(data.h);
  }, []);

  return <div>Quote</div>;
};

export default Quote;
