import React, { useState, useEffect } from "react";
import axios from "axios";

function AllTeeShirtz() {
  const [teeShirtz, setTeeShirtz] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/teeShirtz")
      .then(dbRes => {
        setTeeShirtz(dbRes.data);
        console.log("coucou");
      })
      .catch(dbErr => console.error(dbErr));
  }, []);

  return (
    <div className="teeShirt">
      {teeShirtz.map((tshirt, i) => (
        <>
          <div className="title">
            <h4>{tshirt.name}</h4>
            <h6>{tshirt.brand}</h6>
          </div>
          <img src={tshirt.image} alt="img" />
          <p>{tshirt.price} € </p>
        </>
      ))}
    </div>
  );
}
export default AllTeeShirtz;
