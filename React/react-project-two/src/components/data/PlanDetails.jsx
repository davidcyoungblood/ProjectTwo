import axios from "axios";
import { useState, useEffect } from "react";

export const PlanDetails = () => {
  const [profile, setProfiles] = useState([]); 
  const[plan, setPlans] = useState([]);
  useEffect(() => {
      axios
      .get(`http://localhost:8090/profiles/1`/*, {params : profile.id}*/)
      .then((res) => setProfiles(res.data));
  }, []);
  
  useEffect(() => {
    axios
    .get(`http://localhost:8090/plan/1`/*, {params : profile.statusId}*/)
    .then((res) => setPlans(res.data));
}, []);

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
      <button type="button" className="btn btn-danger" id="plan-button">
        Cancel Subscription
      </button>
    </div>
  );
};