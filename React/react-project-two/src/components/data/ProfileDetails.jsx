import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useConfirm } from 'material-ui-confirm';

export const ProfileDetails = () => {
  const fnRef = useRef();
  const lnRef = useRef();
  const unRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef(); 

  const confirm = useConfirm(); 
  
  const navigate = useNavigate(); 

  const [isEditing, setEditing] = useState(false);

  const string = sessionStorage.getItem("loggedIn");

  const profile = JSON.parse(string);

  const handleEdit = () => {
    return (
      <form
        onSubmit={handleUpdate}
        className="list-group list-group-flush"
        id="profile-details"
      >
        <label className="list-group-item">
          <h6 id="profile-item">first name</h6>
          <input defaultValue={profile.firstName} ref = {fnRef} type="text" />
        </label>
        <label className="list-group-item">
          <h6 id="profile-item">last name</h6>
          <input defaultValue={profile.lastName} ref = {lnRef} type="text" />
        </label>
        <label className="list-group-item">
          <h6 id="profile-item">username</h6>
          <input defaultValue={profile.username}  ref = {unRef} type="text" />
        </label>
        <label className="list-group-item">
          <h6 id="profile-item">email</h6>
          <input defaultValue={profile.email} ref = {emailRef} type="text" />
        </label>
        <label className="list-group-item">
          <h6 id="profile-item">password</h6>
          <input ref = {passwordRef} defaultValue={profile.password} type="password" />
        </label>
        <input type="submit" value="Commit Changes"  className="btn btn-primary" id="profile-button"/>
      </form>
    );
  };

  const handleProfile = () => {
    return (
      <ul className="list-group list-group-flush" id="profile-details">
        <li className="list-group-item">
          <h6 id="profile-item">first name</h6>
          <h5>{profile.firstName}</h5>
        </li>
        <li className="list-group-item">
          <h6 id="profile-item">last name</h6>
          <h5>{profile.lastName}</h5>
        </li>
        <li className="list-group-item">
          <h6 id="profile-item">username</h6>
          <h5>{profile.username}</h5>
        </li>
        <li className="list-group-item">
          <h6 id="profile-item">email</h6>
          <h5>{profile.email}</h5>{" "}
        </li>
      </ul>
    );
  };

  const handleMod = () => {
    setEditing(!isEditing);
  };

  const handleUpdate = async (e) => {

    profile.firstName = fnRef.current.value
    profile.lastName = lnRef.current.value
    profile.username = unRef.current.value
    profile.email = emailRef.current.value
    profile.password = passwordRef.current.value    

      try {
        e.preventDefault()
        await axios.put(
          `http://localhost:8090/profiles/${profile.id}`, profile
        ) 
        
        sessionStorage.removeItem("loggedIn")

        sessionStorage.setItem("loggedIn", JSON.stringify(profile));
        
      } catch (error) {
        console.log(error)
      }
      setEditing(!isEditing);
  };

  const deleteProfile = async(e) => {
    try {
      
      await axios
            .delete(`http://localhost:8090/profiles/${profile.id}`)
      
      sessionStorage.removeItem("loggedIn")
      navigate("/")
    } catch (error) {
    }
  }
  const handleDelete = () => {  

    confirm({description: 'You are fixing to delete your account! This action cannot be undone.', title: 'Confirm Delete Account'})
    .then(() => deleteProfile())
    .catch(() => {console.log('did not delete')}); 
    
  };

  return (    
    <div>
      <h2 id="account-titles">Profile Details</h2>

     {isEditing ? handleEdit() : handleProfile()} 

      <button
        type="button"
        className="btn btn-dark"
        id="profile-button"
        onClick={handleMod}
      >
        Edit Profile
      </button>

      
      <button type="button" id="profile-button" className="btn btn-danger" onClick={() => handleDelete()}>
      Delete
      </button>
      
    </div>
  );
};
