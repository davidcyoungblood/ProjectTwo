import axios from "axios";
import { useState, useEffect } from "react";

export const Status = () => {
  //let [status, setStatus] = useState([]);

  let string = sessionStorage.getItem("loggedIn"); 

  let profile = JSON.parse(string)

  let status = profile.statusId;  //status object
  let interval = profile.intervalId; 

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8090/status/2` /*, {data : profile.id}*/)
  //     .then((res) => setStatus(res.data));
  // }, []);

  const handleCancel = async (e) => {
    try {
      
      const string = sessionStorage.getItem("loggedIn"); 
      const profile = JSON.parse(string)

      let data = await axios .get(`http://localhost:8090/status/4`); 
      
      profile.statusId = data.data;

      // //set date
      // var today = new Date()

      // var date =  (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear() ;
     
      // profile.endDate = date; 

      sessionStorage.removeItem("loggedIn")

      sessionStorage.setItem("loggedIn", JSON.stringify(profile));

      await axios.put(`http://localhost:8090/profiles/${profile.id}`, profile); 

    } catch (error) {
      
    }
    window.location.reload();
}


  return (
    <div>
      <h2 id="account-titles">Status</h2>
      <ul className="list-group list-group-flush" id="profile-details">
        <li className="list-group-item">
          <h3>{status.name}</h3>
        </li>
        <li className="list-group-item">
          <h4>{interval.name}</h4>
        </li>
        
      </ul>
      <button type="button" className="btn btn-danger" id="status-button" onClick={handleCancel}>
        Cancel Subscription
      </button>
    </div>
  );
};
