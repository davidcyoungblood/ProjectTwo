import axios from "axios";
import { useState, useEffect } from "react";
import { BillingInfo } from "./BillingInfo";


export const ProfileDetails = () => {
  //const [profile, setProfiles] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8090/profiles/1` /*, {params : profile.id}*/)
  //     .then((res) => setProfiles(res.data));
  // }, []);

  var [isEditing, setEditing] = useState(false); 


  const editingTemplate = () => {
      console.log("in Editing Template")
    
  }

  const viewTemplate = () => {
    console.log("in view Template")
    
      

  }  
  const handleMod = () => {
    isEditing = false
    const a = isEditing ? editingTemplate : viewTemplate
    console.log(a)
  }

 const string = sessionStorage.getItem("loggedIn"); 

 const profile = JSON.parse(string); 

 console.log()


  return (
    <div>

      <h2 id="account-titles">Profile Details</h2>

      <ul className="list-group list-group-flush" id="profile-details">
        <li className="list-group-item">
          <h6 id="profile-item">first name</h6>
          <h6>{profile.firstName}</h6>
        </li>
        <li className="list-group-item">
          <h6 id="profile-item">last name</h6>
          <h6>{profile.lastName}</h6>
        </li>
        <li className="list-group-item">
          <h6 id="profile-item">username</h6>
          <h6>{profile.username}</h6>
        </li>
        <li className="list-group-item">
          <h6 id="profile-item">email</h6>
          <h6>{profile.email}</h6>{" "}
        </li>
      </ul>


      <button type="button" className="btn btn-dark" id="profile-button" onClick={handleMod}>
        Modify Profile
      </button>
      <button type="button" className="btn btn-primary" id="profile-button">
        Reset Password
      </button>
    </div>
  );
};
