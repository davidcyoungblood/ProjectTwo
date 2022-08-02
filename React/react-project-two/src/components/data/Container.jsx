import { BillingInfo } from "./BillingInfo";
import { PlanDetails } from "./PlanDetails";
import { ProfileDetails } from "./ProfileDetails";
import { Status } from "./Status";
export const Container = () => {
  return (
    <div className="content">
      <div className="account-component" id="bill"><BillingInfo /></div>
      <div className="account-component" id="profile"><ProfileDetails /></div>
      <div className="account-component" id="plan"><PlanDetails /></div>
      <div className="account-component" id="status"><Status /></div>
    </div>
  );
};
