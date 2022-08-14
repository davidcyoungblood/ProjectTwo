import axios from "axios";

export const PlanDetails = () => {

  const string = sessionStorage.getItem("loggedIn");
  const profile = JSON.parse(string)

  const plan = profile.servicePlanId;

  const handleCancel = async (e) => {
    try {

      const string = sessionStorage.getItem("loggedIn");
      const profile = JSON.parse(string)

      // profile.servicePlanId.id = null;

      let data = await axios.get(`http://localhost:8090/status/4`);

      profile.statusId = data.data;

      //set date
      var today = new Date()

      var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

      profile.endDate = date;

      sessionStorage.removeItem("loggedIn")

      sessionStorage.setItem("loggedIn", JSON.stringify(profile));

      await axios.put(`http://localhost:8090/profiles/${profile.id}`, profile);

    } catch (error) {

    }
    window.location.reload();


  }

  const reactivate = async (e) => {
    try {

      const string = sessionStorage.getItem("loggedIn");
      const profile = JSON.parse(string)

      // profile.servicePlanId.id = null;

      let data = await axios.get(`http://localhost:8090/status/2`);

      profile.statusId = data.data;

      //set date
      var today = new Date()

      var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

      profile.endDate = date;

      sessionStorage.removeItem("loggedIn")

      sessionStorage.setItem("loggedIn", JSON.stringify(profile));

      await axios.put(`http://localhost:8090/profiles/${profile.id}`, profile);

    } catch (error) {

    }
    window.location.reload();


  }


  return (
    <div >
      <h2 id="account-titles">Plan Details</h2>
      <ul id="plan-layout" >
        <li className="list-group-item" id="plan-name">
          <h6 id="profile-item">Name</h6>
          <h1>{plan.name}</h1>
        </li>
        <li className="list-group-item" id="plan-sd">
          <h6 id="profile-item">Start Date:</h6>
          <h4>{profile.startDate}</h4>

        </li>
        <li className="list-group-item" id="plan-nbd">
          <h6 id="profile-item"> End Date</h6>
          <h4>{profile.endDate}</h4>
        </li>
        <li className="list-group-item" id="plan-price">
          <h6 id="profile-item">Price</h6>
          <h1>{plan.price}</h1>
        </li>
      </ul>
      {(profile.statusId.id === 4) ? <button className="btn btn-success" id="plan-button" onClick={() => reactivate()}>Reactivate</button> :
        <button type="button" className="btn btn-danger" id="plan-button" onClick={handleCancel}>Cancel Subscription</button>
      }
    </div>
  );
};