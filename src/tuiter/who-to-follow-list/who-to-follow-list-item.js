import React from "react";
import "./who-to-follow-list-item.css";

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'images/nasa.png' }
 }
) => {
 return(
  <li className="list-group-item d-flex justify-content-between align-items-center right-bar-item">
        <img className="who-to-follow" src={who.avatarIcon} />
        <div className="ms-2 me-auto">
            <div className="fw-bold">{who.userName} <i className="fa-solid fa-circle-check"></i></div>
            <span className="text-muted">@{who.handle}</span>
        </div>
        <button type="button" className="btn btn-primary rounded-pill mt-2">Follow</button>
    </li>
  );
};
export default WhoToFollowListItem;

