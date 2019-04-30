class Identification {
    public idType: number = 1;
    public idNumber: string = ""
}

export class Person {
    public type: string = "client";
    public initials: string = "";
    public firstName: string = "";
    public lastName: string = "";
    public titleCode: string = "";
    public dateOfBirth: string = "";
    public occupationStatus: string = "E";
    public maritalStatus: string = "S";
    public maritalStatusDesc: string = "";
    public gender: string = "M";
    public age: number = 24;
    // public relation : string = "",
    public identification: Identification;
    constructor() {
        this.identification = new Identification();
    }
}
