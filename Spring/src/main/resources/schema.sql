/*******************************************************************************
   Create Tables
********************************************************************************/

create table Profile (
	ProfileId INT NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(50),
	LastName VARCHAR(50),
	Username VARCHAR(50),
	Email VARCHAR(254),
	Password VARCHAR(254),    
    StartDate VARCHAR(50),
	NextBillDate VARCHAR(50),
	EndDate VARCHAR(50),
    StatusId INT NOT NULL,
    IntervalsId INT NOT NULL,
    ServicePlanId INT NOT NULL,
    CONSTRAINT PKProfileId PRIMARY KEY (ProfileId)
);
create table ServicePlan (
	ServicePlanId INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(50),
	Price VARCHAR(50),    
    CONSTRAINT PKServicePlanId PRIMARY KEY (ServicePlanId)
);
create table Intervals (
	IntervalsId INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(50),
	Duration INT,
    CONSTRAINT PKIntervalsId PRIMARY KEY (IntervalsId)
);
create table Status (
	StatusId INT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(50),
    CONSTRAINT PKStatusId PRIMARY KEY (StatusId)
);

create table BillingInformation (
	BillingInformationId INT NOT NULL AUTO_INCREMENT,
	BilledOnDate VARCHAR(50),
    ProfileId INT,
    CONSTRAINT PKBillingInformationId PRIMARY KEY (BillingInformationId)
);

/*******************************************************************************
   Create Foreign Keys
********************************************************************************/

ALTER TABLE Profile ADD CONSTRAINT ProfileFKServicePlanId
FOREIGN KEY (ServicePlanId) REFERENCES ServicePlan(ServicePlanId) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Profile ADD CONSTRAINT ProfileFKStatusId
FOREIGN KEY (StatusId) REFERENCES Status(StatusId) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE Profile ADD CONSTRAINT ProfileFKIntervalsId
FOREIGN KEY (IntervalsId) REFERENCES Intervals(IntervalsId) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE BillingInformation ADD CONSTRAINT BillingInformationFKProfileId
FOREIGN KEY (ProfileId) REFERENCES Profile(ProfileId) ON DELETE SET NULL;


