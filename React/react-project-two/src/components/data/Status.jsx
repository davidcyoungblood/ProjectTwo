import axios from "axios";
import { useState, useEffect, useRef } from "react";

export const Status = () => {
  const [status, setStatus] = useState([]);
  useEffect( () => {
    axios
      .get(`http://localhost:8090/profiles/status`/*, {data : profile.id}*/)
      .then((res) => setStatus(res.data)); 
  }, []); 
  return (
    <div>
      <h2 id="account-titles">Status</h2>
      
      <h2 id="account-titles">Profile Details</h2>
      <ul className="list-group list-group-flush" id="profile-details">
        <li className = "list-group-item" >
          <h6 id="profile-item">first name</h6>
          <h6>{profile.firstName}</h6>
           
           </li>
        <li className = "list-group-item" >
          <h6 id="profile-item">last name</h6>
          <h6>{profile.lastName}</h6>
          
          </li>
        <li className = "list-group-item" >
          <h6 id="profile-item">username</h6>
          <h6>{profile.username}</h6></li>
        <li className = "list-group-item" >
          <h6 id="profile-item">
            email
          </h6>
          <h6>{profile.email}</h6> </li>
      </ul>
    </div>
  );
};