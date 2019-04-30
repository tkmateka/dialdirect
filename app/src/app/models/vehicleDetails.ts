import { Address } from "./address";
import { addOns } from "./addOns";
import { riskPremiums } from "./riskPremiums";
import { vehicle } from "./vehicle";

class antiTheftDetails {
    public antiTheftInstalledList: string = "";
    public antiTheftLevelInstalled: string = "";
    public antiTheftLevelRequired: string = "";
    public antiTheftOption: string = "";
    public antiTheftTypeRequired: string = "";
    public antiTheftOptionDescription: string = "";
    public antiTheftTypeInstalledDescription: string = "";
    public isFactoryFitted: string = "Y"
}

class bankDetails {
    public sequenceNumber : string = "0";
}

class status {
    public statusType : string = "";
    public statusDesc : string = "";
}

class vehicleUse {
    public code : string = "02";
    public description : string = "PRIVATE";
}

class underwriting{
    public underwritingResult : string = "";
    public underwritingDecision : string = "";
}

export class waterCraftDetails {
    public amendmentSequenceNumber : number = 0;
    public waterCraftName : string = "";
    public waterCraftSpeed : string = "";
    public wcEngine1Capasity : string =  "";
    public wcEngine1Situated : string = "";
    public wcEngine2Capasity : string =  "";
    public wcEngine2Situated : string = "";
    public wcFootSize : string =  "14";
    public wcMotor1Manufacturer : string = "";
    public wcMotor2Manufacturer : string = "";
}

export class vehicleDetails {
    public vehicleId: string = "";
    public referenceNumber: string = "";
    public sequenceNumber: string = "0";
    public accessoriesValue: string = "0";
    public coverType: string = "A";
    public coverTypeDesc: string = "Comprehensive";
    public commencementDate: string = "";
    public doubleTheft: string = "";
    public effectiveDate: string = "";
    public inceptionDate: string = "";
    public marketRetail: string = "M";
    public marketRetailDesc: string = "";
    public noClaimsDiscount: string = "A";
    public theftExcessBusterRequired: string = "";
    public theftExcessBusterYesNoDescription: string = "";
    public theftExcessBusterYesNo: string = "Y";
    public trackerInstalled: string = "N";
    public trackerYN: string = "N";
    public totalPremium: number = 0;
    public antiTheftDetails : antiTheftDetails = new antiTheftDetails();
    public addresses : Array<Address> = [new Address()];
    public addOns : addOns = new addOns();
    public bankDetails : Array<bankDetails> = [new bankDetails()];
    public riskPremiums : riskPremiums = new riskPremiums();
    public status : status = new status();
    public vehicleUse : vehicleUse = new vehicleUse();
    public underwriting : underwriting = new underwriting();
    public waterCraftDetails : waterCraftDetails = new waterCraftDetails();
    public vehicleDetails : vehicle = new vehicle();
    constructor() {
    }
}


