import axios from "axios";
import { useState, useEffect } from "react";

export const BillingInfo = () => {

  //Created
  const Bill = ({bill}) => {
    return (
      <tr>
        <td>{bill.id}</td>
        <td>{bill.billedOnDate}</td>      
      </tr>
  
    );
  };

  const string = sessionStorage.getItem("loggedIn"); 

  const profile = JSON.parse(string)


  
  //console.log(profile.id)
  const [billing, setBilling] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8090/billing/${profile.id}`  /*,${profile.id} {params : profile.id}*/)
      .then((res) => setBilling(res.data));
  }, []);

  return (
    <div>
      <h2 id="account-titles">Billing Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Billed</th>
          </tr>
        </thead>
        <tbody>
          {billing.map((bill) => {
            return (
              <Bill
                key={bill.id}
                bill={bill}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
