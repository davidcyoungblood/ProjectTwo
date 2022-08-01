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
    <div>
      <h1>Profile Details</h1>
      <table>
        <tbody>
          <tr>
            <td>Name: {plan.name}</td>
          </tr>

          <tr>
            <td> Start Date: {plan.startDate}</td>
          </tr>
          <tr>
            <td>Next Bill Date: {plan.nextBillDate}</td>
          </tr>
          <tr>
            <td>Price: {plan.price} </td>
          </tr>
        </tbody>
      </table>

      <button type="button" className="btn btn-danger">
        Cancel Subscription
      </button>
    </div>
  );
};