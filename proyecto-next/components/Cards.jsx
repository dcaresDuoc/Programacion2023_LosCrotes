import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const Cards = ({ id, photo, name, email, bio, profesion, loading }) => {
  if (loading) {
    return (
      <div className="cards">
        <div className="card">
          <div className="card-info">
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={150} />
          </div>
          <div className="card-img">
            <Skeleton variant="rectangular" width={270} height={200} />
          </div>
          <div className="card-detail">
            <Skeleton variant="text" width={100} />
            <Skeleton variant="text" width={250} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cards">
      <div className="card">
        <div className="card-info">
          <h1>{name}</h1>
          <h2>{email}</h2>
        </div>
        <div className="card-img">
          <img src={photo} alt="imagen de persona adulta" width={270} height={200} />
        </div>
        <div className="card-detail">
          <h5>{profesion}</h5>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
