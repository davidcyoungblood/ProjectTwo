import axios from "axios";
export const BillingInfo = () => {
  return (
    <div>
      <h2 id="account-titles">Billing Information</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date Billed</th>
          </tr>
        </thead>
        <tbody>
          {/**Axios call to a find all for billing information table */}
        </tbody>
      </table>
    </div>
  );
};
