import React from "react";
import Divider from "material-ui/Divider";

import profile from "./profile.jpg";
import "./Profile.css";

const Profile = () =>
  <div className="profile-container">
    <img src={profile} id="profile-pic" alt="" />
    <br />
    <br />
    <Divider className="divider profile-text" />
    <h2 className="profile-title">ALEX WILLENBRINK</h2>
  </div>;

export default Profile;
