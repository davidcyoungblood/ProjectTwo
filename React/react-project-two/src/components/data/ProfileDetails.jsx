import axios from "axios";
import { useState, useEffect } from "react";

export const ProfileDetails = () => {
  const [profile, setProfiles] = useState([]); 
  useEffect(() => {
    axios
      .get(`http://localhost:8090/profiles/1`/*, {data : profile.id}*/)
      .then((res) => setProfiles(res.data));
  }, []);
  return (
    <div>
      <h2 id="account-titles">Profile Details</h2>
      <ul className="list-group list-group-flush" id="profile-details">
        <li class = "list-group-item" >
          <h6 id="profile-item">first name</h6>
          <h5>{profile.firstName}</h5>
           
           </li>
        <li class = "list-group-item" >
          <h6 id="profile-item">last name</h6>
          <h5>{profile.lastName}</h5>
          
          </li>
        <li class = "list-group-item" >
          <h6 id="profile-item">username</h6>
          <h5>{profile.username}</h5></li>
        <li class = "list-group-item" >
          <h6 id="profile-item">
            email
          </h6>
          <h5>{profile.email}</h5> </li>
      </ul>
      

      <button type="button" className="btn btn-dark" id="profile-button">
        Modify Profile
      </button>
      <button type="button" className="btn btn-primary" id="profile-button">
        Reset Password
      </button>
    </div>
  );
};
