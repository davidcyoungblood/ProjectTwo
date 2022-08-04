/*******************************************************************************
   Create Dummies
********************************************************************************/

insert into Status (Name) values ('Free Trial');
insert into Status (Name) values ('Active');
insert into Status (Name) values ('Expiring Soon');
insert into Status (Name) values ('Inactive');

insert into Intervals (Name, Duration) values ('7 day free trial', 7);
insert into Intervals (Name, Duration) values ('1 month', 31);
insert into Intervals (Name, Duration) values ('3 months', 93);
insert into Intervals (Name, Duration) values ('6 months', 186);

insert into ServicePlan (Name, Price) values ('Free','$9.63');
insert into ServicePlan (Name, Price) values ('Standard', '$2.66');
insert into ServicePlan (Name, Price) values ('Plus','$1.87');
insert into ServicePlan (Name, Price) values ('Premium','$4.43');

insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Ned', 'Gonnard', 'ngonnard0', 'ngonnard0@washingtonpost.com', '4g4JHq8YW', 1, null,null,null,1,1);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Fulvia', 'Parsley', 'fparsley1', 'fparsley1@indiatimes.com', 'j55wwt', 1, null,null,null,1,2);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Jean', 'Zelner', 'jzelner2', 'jzelner2@forbes.com', 'KRTOkQjL', 1, null,null,null,2,1);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Curcio', 'Redmayne', 'credmayne3', 'credmayne3@fda.gov', 'VUHhsgWn', 2, null,null,null,3,4);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Arin', 'Pepperell', 'apepperell4', 'apepperell4@tripod.com', 'pix70r2i', 2, null,null,null,1,4);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Tiebout', 'Stanbury', 'tstanbury5', 'tstanbury5@reddit.com', 'JcQqVZxLBl0', 2, null,null,null,2,2);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Herculie', 'Naulls', 'hnaulls6', 'hnaulls6@yellowpages.com', '3qs66f', 2, null,null,null,3,1);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Rube', 'Aslie', 'raslie7', 'raslie7@soup.io', 'AKWnS08oZ', 3, null,null,null,2,3);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Elliott', 'Bugbee', 'ebugbee8', 'ebugbee8@marketwatch.com', 'O6aNTaLjOG', 3, null,null,null,4,4);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId, StartDate, NextBillDate, EndDate, StatusId, IntervalsId) values ('Lucais', 'de Castelain', 'ldecastelain9', 'ldecastelain9@devhub.com', 'YEc8XKnxyBg', 4, null,null,null,2,1);


insert into BillingInformation (BilledOnDate, ProfileId) values (null, 1);
insert into BillingInformation (BilledOnDate, ProfileId) values (null, 2);
insert into BillingInformation (BilledOnDate, ProfileId) values (null, 3);
insert into BillingInformation (BilledOnDate, ProfileId) values ('12/05/2021', 4);
insert into BillingInformation (BilledOnDate, ProfileId) values ('12/05/2021', 5);
insert into BillingInformation (BilledOnDate, ProfileId) values ('12/05/2021', 6);
insert into BillingInformation (BilledOnDate, ProfileId) values ('12/05/2021', 7);
insert into BillingInformation (BilledOnDate, ProfileId) values ('04/25/2022', 8);
insert into BillingInformation (BilledOnDate, ProfileId) values ('04/25/2022', 9);
insert into BillingInformation (BilledOnDate, ProfileId) values ('02/03/2022', 10);