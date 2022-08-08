import axios from "axios";
import { useState, useEffect } from "react";

export const Status = () => {
  let [status, setStatus] = useState([]);

  let string = sessionStorage.getItem("loggedIn"); 

  let profile = JSON.parse(string)

  status = profile.statusId;  //status object

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8090/status/2` /*, {data : profile.id}*/)
  //     .then((res) => setStatus(res.data));
  // }, []);
  return (
    <div>
      <h2 id="account-titles">Status</h2>
      <ul className="list-group list-group-flush" id="profile-details">
        <li className="list-group-item">
          <h2>{status.name}</h2>
        </li>
        
      </ul>
    </div>
  );
};
