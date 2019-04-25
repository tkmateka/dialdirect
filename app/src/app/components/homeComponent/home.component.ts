/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
// Services
import { tokenService } from '../../services/token/token.service';
import { staticdataService } from '../../services/staticdata/staticdata.service';
import { createleadService } from '../../services/createlead/createlead.service';
import { suburbService } from '../../services/suburb/suburb.service';
import { vehiclesService } from '../../services/vehicles/vehicles.service';
import { vehiclemakeService } from '../../services/vehiclemake/vehiclemake.service';
import { vehiclemodelService } from '../../services/vehiclemodel/vehiclemodel.service';
import { vehiclemodeldescriptionService } from '../../services/vehiclemodeldescription/vehiclemodeldescription.service';
// Models
import { Person } from "../../models/person";
import { ContactDetails } from "../../models/contact-details";
import { Address } from "../../models/address";
import { LeadDetails } from "../../models/lead";

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    // Default Variables
    step = 0;
    currentLink;
    gender = "female";
    submitted = false;
    selectDisabled = false;
    displayDateString: any;
    maxDate = "2000-12-31";
    toolbarIcons = ["home", "person"];
    planStatuses = ["Premium", "Gold", "Platinum"];
    medicalAidStatuses = ["Dialdirect", "Discovery", "Clientele"];
    nonMotor = ["Home Content", "Building", "Portable Possessions"];
    areaTypes = [
        "RESIDENTIAL/COMMERCIAL NAMED PREMISES", "	RESIDENTIAL BUILDING GROUP",
        "NON-RESIDENTIAL BUILDING GROUP", "MIXED BUILDING GROUP", "MILITARY BASE"
    ];
    motorItems = [
        "Motor car(0)", "Motorcycle(0)", "Caravan(0)",
        "Trailer(0)", "Watchcraft(0)", "Golf Cart(0)"
    ];
    genderOptions: any = [
        { label: 'male', value: 'M', checked: false },
        { label: 'female', value: 'F', checked: true }
    ];

    // Objects
    companyObj = {
        "name": "Dialdirect", "code": "08", "brandDetails": {
            "brandId": "08", "brandName": ""
        },
        "brokerDetails": {
            "brokerCode": "DIALD", "brokerGroup": "", "vdnNumber": "TEST7"
        },
        "envIdentity": "DEN08B",
        "theme": "dial-theme"
    };

    // Strings
    fullName = "";
    refNumber = "";
    access_token;
    postCode = "";
    suburbSequence = "";
    selectedYear = "";
    selectedMake = "";
    selectedModel = "";

    // Arrays
    titles = [];
    suburbs = [];
    areatype = [];
    year: any = [];
    make: any = [];
    model: any = [];
    vehicle: any = [];
    modelDescription: any = [];
    additional = [];
    maritalStats = [];

    // Intervals
    refCodeInterval;
    genTokenInterval;
    getStaticInterval;
    getVehicleInterval;
    getVehicleMakeInterval;
    getVehicleModelInterval;
    getVehicleModelDescriptionInterval;

    // Data Model
    person = new Person();
    contactDetails = new ContactDetails();
    address = new Address();
    lead = new LeadDetails();

    // Form Groups
    policyHolderForm: FormGroup;
    medicalAid: FormGroup;
    motorInsurance: FormGroup;
    riskAddress: FormGroup;
    riskItemDetails: FormGroup;
    prossessingPermission: FormGroup;

    // =============================================================================
    // Constructor
    // =============================================================================

    constructor(private bdms: NDataModelService,
        private http: HttpClient,
        private staticdataService: staticdataService,
        private createleadService: createleadService,
        private suburbService: suburbService,
        private vehiclesService: vehiclesService,
        private vehiclemakeService: vehiclemakeService,
        private vehiclemodelService: vehiclemodelService,
        private vehiclemodeldescriptionService: vehiclemodeldescriptionService,
        private tokenService: tokenService) {
        super();
        this.mm = new ModelMethods(bdms);

        // FORM GROUPS

        // Policy Holder Form
        this.policyHolderForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            idType: new FormControl('', Validators.required),
            idNumber: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern(/^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/),
                Validators.minLength(13),
                Validators.maxLength(13)
            ])),
            dob: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
            maritalStatus: new FormControl('', Validators.required),
            employmentStatus: new FormControl('', Validators.required),
            cellNumber: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(10)
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });

        // Medical Aid Form
        this.medicalAid = new FormGroup({
            haveMedAid: new FormControl('', Validators.required),
            medAidStatus: new FormControl('', Validators.required),
            planStatus: new FormControl('', Validators.required)
        });

        // Motor Insurance Form
        this.motorInsurance = new FormGroup({
            motor: new FormControl('', Validators.required),
            nonMotor: new FormControl('', Validators.required)
        });

        // Prossessing Permission Form
        this.prossessingPermission = new FormGroup({
            response: new FormControl('', Validators.required),
        });

        // Risk Address Form
        this.riskAddress = new FormGroup({
            areaTypes: new FormControl('', Validators.required),
            address1: new FormControl('', Validators.required),
            address2: new FormControl('', Validators.required),
            address3: new FormControl('', Validators.required),
            suburb: new FormControl('', Validators.required),
            postalCode: new FormControl('', Validators.required)
        });
    }

    // =============================================================================
    // NgOnInit
    // =============================================================================

    ngOnInit() {

        // Risk Items Details
        this.riskItemDetails = new FormGroup({
            vehicleYear: new FormControl('', Validators.required),
            vehicleMake: new FormControl('', Validators.required),
            vehicleModel: new FormControl('', Validators.required),
            vehicleModelDescription: new FormControl('', Validators.required)
        });

        // Get Expiry Time and Check If there is a Token in the Local Storage
        let curTime = Date.now();
        let exTime = Number(localStorage.getItem('expiryTime'));
        let temp_tok = localStorage.getItem("token");

        if (curTime >= exTime) {
            this.genToken();
        } else if (temp_tok) {
            this.access_token = temp_tok;
            this.staticdataService.getStaticData(this.access_token);
            this.vehiclesService.getYears(this.access_token);

            // Seconds Interval
            this.getVehicleInterval = setInterval(() => {
                this.year = this.vehiclesService.year;

                if (this.year.length) {
                    clearInterval(this.getVehicleInterval);
                    this.setActiveLink("idEntity");
                }
            }, 1000);
        } else {
            this.genToken();
        }

        // Static Data Interval
        this.getStaticInterval = setInterval(() => {
            this.titles = this.staticdataService.title;
            this.maritalStats = this.staticdataService.maritalStatus;
            this.additional = this.staticdataService.additional;
            this.areatype = this.staticdataService.areatype;

            if (this.titles.length && this.maritalStats.length && this.additional.length) {
                clearInterval(this.getStaticInterval);
            }
        }, 1000);

        this.currentLink = "idEntity";
    }

    // ===========================================================================================
    // Functions
    // ===========================================================================================

    // Set Active Link
    setActiveLink(activeLink) {
        this.currentLink = activeLink;
    }

    // Set Step
    setStep(index: number) {
        this.step = index;
    }

    // Get Token
    genToken() {
        return this.tokenService.genToken();
    }

    // convenience getter for easy access to form fields
    get policy() { return this.policyHolderForm.controls; };
    get medical() { return this.medicalAid.controls; };
    get motor() { return this.motorInsurance.controls; };
    get risk() { return this.riskAddress.controls; };
    get riskItem() { return this.riskItemDetails.controls; };
    get prossessing() { return this.prossessingPermission.controls; };

    // Set Postal Code
    setPostCode(suburb) {
        this.postCode = suburb.postCode;
        this.suburbSequence = suburb.suburbSequence;
    }

    // Disable if data
    selectedLink: string;

    setradio(e: string): void {
        this.selectedLink = e;
        if (e === "idRadio") {
            this.policyHolderForm.get('dob').disable();
            this.policyHolderForm.get('gender').disable();
        } else {
            this.policyHolderForm.get('dob').enable();
            this.policyHolderForm.get('gender').enable();
        }
    }

    isSelected(name: string): boolean {
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;
        }
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }

    // Calculate age
    ageFromDateOfBirth(dateOfBirth: any): number {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Get Initials
    getInitials(string) {
        var names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();

        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    // Logger
    log() {
        // Identity Validation
        var code = this.policyHolderForm.value.idNumber,
            personDetails = { 'dob': '', 'isMale': false },
            strlenth = (code.length - 1);
        for (var i = 0; i < strlenth; i++) {
            if (i < (strlenth - 6)) {
                personDetails.dob += code[i];
            } else if (i == 6) {
                personDetails.isMale = ((code[i] > 4) ? true : false);
            }
        }
        var res = personDetails.dob.substr(0, 2);
        var displayYear;
        if (res < '30') {
            displayYear = "20" + res;
        } else {
            displayYear = "19" + res;
        }

        var displayMonth = personDetails.dob.substr(2, 2);
        var displayDay = personDetails.dob.substr(4, 2);

        // set gender
        if (personDetails.isMale == true) {
            this.gender = "male";
            this.genderOptions[0].checked = true;
            this.genderOptions[1].checked = false;
        }
        this.displayDateString = `${displayYear}-${displayMonth}-${displayDay}`;
        const defaultDOB = document.getElementById("defaultDOB") as HTMLInputElement;
        defaultDOB.value = this.displayDateString;
    }

    // ===========================================================================================
    // GET SUBURBS
    // ===========================================================================================

    // get input value and call the suburb api
    onKey(event: any) { // without type info
        this.suburbService.suburbsName = event.target.value;
        this.suburbService.getSuburbs(this.access_token);

        this.suburbs = this.suburbService.suburbs;

        if (this.suburbs.length > 0) {
            this.suburbs.find(e => e === this.suburbService.suburbsName);
        }
    }

    // ===========================================================================================
    // SUBMIT FORM (   onNext     )
    // ===========================================================================================

    onNext() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.policyHolderForm.invalid || this.riskAddress.invalid) { return; }
        // Disabled Forms
        //  || this.motorInsurance.invalid || this.medicalAid.invalid || this.prossessingPermission.invalid    

        // Assigning the form value to the data model
        // Person
        this.person.firstName = this.policyHolderForm.value.firstName;
        this.person.lastName = this.policyHolderForm.value.surname;
        this.person.titleCode = this.policyHolderForm.value.title;
        this.person.identification.idType = this.policyHolderForm.value.idType;
        this.person.identification.idNumber = this.policyHolderForm.value.idNumber;
        this.person.dateOfBirth = this.displayDateString;
        this.person.gender = this.gender;
        this.person.maritalStatus = this.policyHolderForm.value.maritalStatus;
        this.person.occupationStatus = this.policyHolderForm.value.employmentStatus;
        this.person.initials = this.getInitials(this.person.firstName);
        this.person.age = this.ageFromDateOfBirth(this.displayDateString);
        // Contact Details
        this.contactDetails.email = this.policyHolderForm.value.email;
        this.contactDetails.phones[0].number = this.policyHolderForm.value.cellNumber;
        // Address
        this.address.addressType = this.riskAddress.value.areaTypes;
        this.address.address1 = this.riskAddress.value.address1;
        this.address.address2 = this.riskAddress.value.address2;
        this.address.address3 = this.riskAddress.value.address3;
        this.address.suburbName = this.riskAddress.value.suburb;
        this.address.suburbSequence = this.suburbSequence;
        this.address.postalCode = this.riskAddress.value.postalCode;
        // Lead brokerDetails Object
        this.lead.brokerDetails.brokerCode = this.companyObj.brokerDetails.brokerCode;
        this.lead.brokerDetails.brokerGroup = this.companyObj.brokerDetails.brokerGroup;
        this.lead.brokerDetails.vdnNumber = this.companyObj.brokerDetails.vdnNumber;
        // Lead brokerDetails Object
        this.lead.brandDetails.brandId = this.companyObj.brandDetails.brandId;
        this.lead.brandDetails.brandName = this.companyObj.brandDetails.brandName;
        // Add Person to lead
        this.lead.person = this.person;
        // Add contactDetail to lead
        this.lead.contactDetail = this.contactDetails;
        // Add address to lead
        this.lead.addresses[0] = this.address;

        this.fullName = this.policyHolderForm.value.firstName + " " + this.policyHolderForm.value.surname;

        // POST  PERSONAL DATA
        this.createleadService.createlead(this.access_token, this.lead);

        // ===========================================================================================
        // CREATE LEAD
        // ===========================================================================================

        // Seconds Interval
        this.refCodeInterval = setInterval(() => {
            if (this.createleadService.refNumber.length) {
                clearInterval(this.refCodeInterval);
                this.refNumber = this.createleadService.refNumber;

                this.policyHolderForm.disable();
                this.riskAddress.disable();
                this.setActiveLink('riSkitem');
            }
        }, 1000);
    }

    // ===========================================================================================
    // GET VEHICLE MAKE
    // ===========================================================================================

    // Set Year and get Make
    getMake(year) {
        this.riskItemDetails.controls['vehicleMake'].reset();
        this.riskItemDetails.controls['vehicleModel'].reset();
        this.riskItemDetails.controls['vehicleModelDescription'].reset();

        this.selectedYear = year;
        console.log(this.selectedYear, "year");
        this.vehiclemakeService.getMake(this.access_token, this.selectedYear);
        // Seconds Interval
        this.getVehicleMakeInterval = setInterval(() => {
            this.make = this.vehiclemakeService.make;
            if (this.make.length) {
                clearInterval(this.getVehicleMakeInterval);
                return this.make;
            }
        }, 500);
    }

    // ===========================================================================================
    // GET VEHICLE MODEL
    // ===========================================================================================

    // Set Year and get Model
    getModel(make) {
        this.riskItemDetails.controls['vehicleModel'].reset();
        this.riskItemDetails.controls['vehicleModelDescription'].reset();

        this.selectedMake = make;
        console.log(this.selectedMake, "make");
        this.vehiclemodelService.getModel(this.access_token, this.selectedYear, this.selectedMake);
        // Seconds Interval
        this.getVehicleModelInterval = setInterval(() => {
            this.model = this.vehiclemodelService.model;
            if (this.model.length) {
                clearInterval(this.getVehicleModelInterval);
                return this.model;
            }
        }, 1000);
    }

    // ===========================================================================================
    // GET VEHICLE MODEL DESCRIPTION
    // ===========================================================================================

    // Set Year and get Model Description
    getModelDescription(model) {
        this.riskItemDetails.controls['vehicleModelDescription'].reset();

        this.selectedModel = model;
        console.log(this.selectedModel, "model");
        this.vehiclemodeldescriptionService.getModelDescription(this.access_token, this.selectedYear, this.selectedMake, this.selectedModel);
        // Seconds Interval
        this.getVehicleModelDescriptionInterval = setInterval(() => {
            this.modelDescription = this.vehiclemodeldescriptionService.modelDescription;
            if (this.modelDescription.length) {
                clearInterval(this.getVehicleModelDescriptionInterval);
                return this.modelDescription;
            }
        }, 1000);
    }

    // ===========================================================================================
    // SUBMIT FORM (   onNextRisk     )
    // ===========================================================================================

    storeVehicle(vehicle) {
        this.vehicle = vehicle;
        console.log(this.vehicle, "vehicle");
    }

    // ===========================================================================================
    // SUBMIT FORM (   onNextRisk     )
    // ===========================================================================================

    onNextRisk() {

    }

}
