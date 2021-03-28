import React, { useEffect, useState } from "react";
import classes from "./UserDetails.module.scss";
const UserDetails = ({ userDetails }) => {
  //console.log(userDetails);
  //user details
  const [infoText, setInfoText] = useState(
    `${userDetails.location.city}, ${userDetails.location.country}`
  );
  //on render show location as default on modal user details card
  useEffect(() => {
    setInfoText(
      `${userDetails.location.city}, ${userDetails.location.country}`
    );
  }, [userDetails.name.first]);
  return (
    <div className={classes.UserDetails}>
      <div className={classes.imgWrapper}>
        <img src={userDetails.picture.large} alt="img" />
      </div>
      <h3>
        {userDetails.name.first} {userDetails.name.last}
      </h3>

      <div className={classes.infoText}>
        <h4>{infoText}</h4>
      </div>
      {/* buttons to show user details */}
      <ul className={classes.userDetailsLlist}>
        <li onClick={() => setInfoText(userDetails.phone)}>
          <p>
            <i className="fas fa-phone"></i>
          </p>
        </li>
        <li onClick={() => setInfoText(userDetails.email)}>
          <p>
            <i className="fas fa-envelope"></i>
          </p>
        </li>
        <li
          onClick={() =>
            setInfoText(
              `${userDetails.location.city}, ${userDetails.location.country}`
            )
          }
        >
          <p>
            <i className="fas fa-map-marked-alt"></i>
          </p>
        </li>
      </ul>
    </div>
  );
};
export default UserDetails;
