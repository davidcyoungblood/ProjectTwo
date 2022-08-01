import axios from "axios";
import { useState, useEffect } from "react";

export const ProfileDetails = () => {
  const [profile, setProfiles] = useState([]); 
  useEffect(() => {
    axios
      .get(`http://localhost:8090/profiles/2`/*, {data : profile.id}*/)
      .then((res) => setProfiles(res.data));
  }, []);
  return (
    <div>
      <h1>Profile Details</h1>
      <table>
        <tbody>
          <tr>
            <td>First Name: {profile.firstName}</td>
          </tr>

          <tr>
            <td> Last Name: {profile.lastName}</td>
          </tr>
          <tr>
            <td>Username: {profile.username}</td>
          </tr>
          <tr>
            <td>Email: {profile.email} </td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="btn btn-dark">
        Modify Profile
      </button>
      <button type="button" className="btn btn-primary">
        Reset Password
      </button>
    </div>
  );
};
