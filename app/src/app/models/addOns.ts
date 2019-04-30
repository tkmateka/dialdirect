export class addOns {
    public additionalPassengerLiability: additionalPassengerLiability = new additionalPassengerLiability();
    public canopy: canopy = new canopy();;
    public carHire: carHire = new carHire();
    public sasriaCover: string = "Y";
    public sasriaCoverDescription: string = "";
    public hailCover: string = "Y";
    public hailCoverDescription: string = "";
    public roadsideAssistance: string = "";
    public roadsideAssistance2: string = "";
    constructor() {
    }
}

class additionalPassengerLiability {
    public description: string = "Standard Liability";
    public code: string = "N";
}

class canopy {
    public canopyAllowed: string = "N";
    public canopyCoverRequired: string = "N";
    public canopyAllowedDescription: string = ""
}

class carHire {
    public carType: string = "";
    public carHireYN: string = "N";
    public extendedCarHire: string = "";
    public carHireWhichCarDescription: string = "";
    public carHireYnDescription: string = "";
    public extendedCarHireDescription: string = "";
}