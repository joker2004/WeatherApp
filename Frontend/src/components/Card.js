import React from "react";
import Moment from "react-moment";

const Card = ({ data }) => {
  const displayCard = data.map((item) => {
    return (
      <div className="card">
        <div className="card-heading">
          <div className="sub-wrapper left">
            <p className="heading">Max</p>
            <div className="p_styler">
              <p className="val">{item.Max}</p>
            </div>
          </div>
          <div className="sub-wrapper">
            <p className="heading">Min</p>
            <div className="p_styler">
              <p className="val">{item.Min}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="date_styler">
            <p className="val-date">
              <Moment format="dddd, D MMM YYYY">{item.Date}</Moment>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="cards">
      <div className="section">{displayCard}</div>
    </div>
  );
};

export default Card;
