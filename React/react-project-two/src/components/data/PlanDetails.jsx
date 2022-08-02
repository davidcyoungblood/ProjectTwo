import axios from "axios";
import { useState, useEffect } from "react";

export const PlanDetails = () => {
  const [plan, setPlans] = useState([]); 
  useEffect(() => {
    axios
      .get(`http://localhost:8090/plan/2`/*, {data : profile.id}*/)
      .then((res) => setPlans(res.data));
  }, []);
  return (
    <div >
      <h2 id="account-titles">Plan Details</h2>
      <ul id="plan-layout" >
        <li  class = "list-group-item" id="plan-name">
          <h6 id="profile-item">Name</h6>
        <h1>{plan.name}</h1>
        </li>
        <li class = "list-group-item" id="plan-sd">
          <h6 id="profile-item">Start Date:</h6>
          <h4>{plan.startDate}</h4>
         
        </li>
        <li class = "list-group-item" id="plan-nbd">
          <h6 id="profile-item"> Next Bill Date</h6>
        <h4>{plan.nextBillDate}</h4>
        </li>
        <li class = "list-group-item" id="plan-price">
          <h6 id="profile-item">Price</h6>
        <h1>{plan.price}</h1>
        </li>
        </ul>
      

      <button type="button" className="btn btn-danger">
        Cancel Subscription
      </button>
    </div>
  );
};