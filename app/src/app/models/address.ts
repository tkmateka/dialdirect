export class Address {
    public addressType: string = "R";
    public isResidentialAdd: string = "Y";
    public isPostalAdd: string = "Y";
    public accessControlledType: string = "01";//prev it was 'Y', changed as per conformed with marcel
    public address1: string = "";
    public address2: string = "";
    public address3: string = "";
    public areaType: string = "H";
    public postalCode: string = "";
    public suburbName: string = "";
    public suburbSequence: string = "";
    public province: string = "";
    public coordinates : Coordinates;
    constructor(){
        this.coordinates = new Coordinates();
    }
}

export class Coordinates {
    public lattitude: string = "";
    public longitude: string = "";
}
