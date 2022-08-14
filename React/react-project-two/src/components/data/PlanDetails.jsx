import axios from "axios";

export const PlanDetails = () => {

  const string = sessionStorage.getItem("loggedIn");
  const profile = JSON.parse(string)

  const plan = profile.servicePlanId;
  
  return (
    <div >
      <h2 id="account-titles">Plan Details</h2>
      <ul id="plan-layout" >
        <li className="list-group-item" id="plan-name">
          <h6 id="profile-item">Name</h6>
          <h1 id= "plan-title">{plan.name}</h1>
        </li>
        <li className="list-group-item" id="plan-price">
          <h6 id="profile-item">Price</h6>
          <h1 id= "plan-title">{plan.price}</h1>
        </li>
      </ul>
    </div>
  );
};
