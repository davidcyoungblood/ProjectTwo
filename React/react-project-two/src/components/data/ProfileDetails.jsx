import axios from "axios";

export const ProfileDetails = ({profile}) => {
  return (
    <div>

      <h1>Profile Details</h1>
      <table>
        <tr>First Name: </tr>
        <tr>Last Name: </tr>
        <tr>Username: </tr>
        <tr>Email: </tr>
      </table>
      <button type="button" className="btn btn-dark">Edit</button>

      <button type="button"className="btn btn-primary">Reset Password</button>
    </div>
  );
};