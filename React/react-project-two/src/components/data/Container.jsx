import { BillingInfo } from "./BillingInfo";
import { PlanDetails } from "./PlanDetails";
import { ProfileDetails } from "./ProfileDetails";
import { StatusDetails } from "./StatusDetails";
import { ConfirmProvider } from "material-ui-confirm";

export const Container = () => {
  return (
    <ConfirmProvider>
      <div className="content">
        <div className="account-component" id="bill">
          <BillingInfo />
        </div>
        <div className="account-component" id="profile">
          <ProfileDetails key={1} />
        </div>
        <div className="account-component" id="plan">
          <PlanDetails />
        </div>
        <div className="account-component" id="status">
          <StatusDetails />
        </div>
      </div>
    </ConfirmProvider>
  );
};
