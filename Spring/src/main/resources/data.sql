insert into Status (Name) values ('Free Trial');
insert into Status (Name) values ('Active');
insert into Status (Name) values ('Expiring Soon');
insert into Status (Name) values ('Inactive');

insert into Intervals (Name, Duration) values ('7 day free trial', 7);
insert into Intervals (Name, Duration) values ('1 month', 31);
insert into Intervals (Name, Duration) values ('3 months', 93);
insert into Intervals (Name, Duration) values ('6 months', 186);

insert into ServicePlan (Name, StartDate, NextBillDate, EndDate, Price, StatusId, IntervalsId) values ('Free', '11/08/2021', '12/08/2021', null, '$9.63', 1, 1);
insert into ServicePlan (Name, StartDate, NextBillDate, EndDate, Price, StatusId, IntervalsId) values ('Standard', '12/05/2021', '01/05/2022', null, '$2.66', 2, 2);
insert into ServicePlan (Name, StartDate, NextBillDate, EndDate, Price, StatusId, IntervalsId) values ('Plus', '04/25/2022', '05/25/2022', null, '$1.87', 2, 3);
insert into ServicePlan (Name, StartDate, NextBillDate, EndDate, Price, StatusId, IntervalsId) values ('Premium', '02/03/2022', '03/03/2022', null, '$4.43', 2, 4);

insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Ned', 'Gonnard', 'ngonnard0', 'ngonnard0@washingtonpost.com', '4g4JHq8YW', 1);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Fulvia', 'Parsley', 'fparsley1', 'fparsley1@indiatimes.com', 'j55wwt', 1);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Jean', 'Zelner', 'jzelner2', 'jzelner2@forbes.com', 'KRTOkQjL', 1);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Curcio', 'Redmayne', 'credmayne3', 'credmayne3@fda.gov', 'VUHhsgWn', 2);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Arin', 'Pepperell', 'apepperell4', 'apepperell4@tripod.com', 'pix70r2i', 2);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Tiebout', 'Stanbury', 'tstanbury5', 'tstanbury5@reddit.com', 'JcQqVZxLBl0', 2);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Herculie', 'Naulls', 'hnaulls6', 'hnaulls6@yellowpages.com', '3qs66f', 2);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Rube', 'Aslie', 'raslie7', 'raslie7@soup.io', 'AKWnS08oZ', 3);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Elliott', 'Bugbee', 'ebugbee8', 'ebugbee8@marketwatch.com', 'O6aNTaLjOG', 3);
insert into Profile (FirstName, LastName, Username, Email, Password, ServicePlanId) values ('Lucais', 'de Castelain', 'ldecastelain9', 'ldecastelain9@devhub.com', 'YEc8XKnxyBg', 4);


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