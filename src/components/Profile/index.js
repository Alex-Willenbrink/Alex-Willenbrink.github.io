import React from "react";
import Divider from "material-ui/Divider";

import profile from "./profile.jpg";
import "./Profile.css";

const Profile = () =>
  <div className="profile-container">
    <h2 className="profile-title">ALEX WILLENBRINK</h2>
    <Divider className="divider profile-text" />
    <br />
    <br />
    <img src={profile} id="profile-pic" alt="" />
  </div>;

export default Profile;
