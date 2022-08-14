import { BillingInfo } from "./BillingInfo";
import { PlanDetails } from "./PlanDetails";
import { ProfileDetails } from "./ProfileDetails";
import { Status } from "./Status";

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
          <Status />
        </div>
      </div>
    </ConfirmProvider>
  );
};
