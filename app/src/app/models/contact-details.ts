class Phone {
    public type: string = "CELL";
    public dialCode: string = "";
    public number: string = "";
}

export class ContactDetails {
    public email: string = "";
    public phones: Array<Phone> = []
    constructor() {
        let objPhone = new Phone();
        this.phones.push(objPhone);
    }
}
