import { BillingInfo } from "./BillingInfo";
import { PlanDetails } from "./PlanDetails";
import { ProfileDetails } from "./ProfileDetails";
import { Status } from "./Status";
export const Container = () => {
  return (
    <div className="content">
      <div className="bill"><BillingInfo /></div>
      <div className="profile"><ProfileDetails /></div>
      <div className="plan"><PlanDetails /></div>
      <div className="status"><Status /></div>
    </div>
  );
};
