import axios from "axios";
import { useState, useEffect } from "react";

export const PlanDetails = () => {
  //const [profile, setProfiles] = useState([]); 
  var[plan, setPlans] = useState([]);

  const string = sessionStorage.getItem("loggedIn"); 
  

  const profile = JSON.parse(string)

  plan = profile.servicePlanId; 


//   useEffect(() => {
//       axios
//       .get(`http://localhost:8090/profiles/1`/*, {params : profile.id}*/)
//       .then((res) => setProfiles(res.data));
//   }, []);
  
//   useEffect( () => {
//     axios
//     .get(`http://localhost:8090/plan/${profile.servicePlanId}`/*, {params : profile.statusId}*/)
//     .then((res) => setPlans(res.data));
// }, []);

  const handleCancel = async (e) => {
      try {
        e.preventDefault(); 
        
        let temp = profile; 
        let data = await axios .get(`http://localhost:8090/status/4`); 
        temp.statusId = data.data;
        
        profile.statusId = data.data;

        profile.nextBillDate = '---'; 

        sessionStorage.removeItem("loggedIn")

        sessionStorage.setItem("loggedIn", JSON.stringify(profile));

        await axios.put(`http://localhost:8090/profiles/${profile.id}`, profile); 


        //reloads the page
        window.location.reload()

      } catch (error) {
        
      }

  }


  return (
    <div >
      <h2 id="account-titles">Plan Details</h2>
      <ul id="plan-layout" >
        <li  className = "list-group-item" id="plan-name">
          <h6 id="profile-item">Name</h6>
        <h1>{plan.name}</h1>
        </li>
        <li className = "list-group-item" id="plan-sd">
          <h6 id="profile-item">Start Date:</h6>
          <h4>{profile.startDate}</h4>
         
        </li>
        <li className = "list-group-item" id="plan-nbd">
          <h6 id="profile-item"> Next Bill Date</h6>
        <h4>{profile.nextBillDate}</h4>
        </li>
        <li className = "list-group-item" id="plan-price">
          <h6 id="profile-item">Price</h6>
        <h1>{plan.price}</h1>
        </li>
        </ul>
      <button type="button" className="btn btn-danger" id="plan-button" onClick={handleCancel}>
        Cancel Subscription
      </button>
    </div>
  );
};