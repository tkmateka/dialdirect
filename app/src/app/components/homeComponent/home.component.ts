/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
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
import { createvehicleService } from '../../services/createvehicle/createvehicle.service';
// Models
import { Person } from "../../models/person";
import { ContactDetails } from "../../models/contact-details";
import { Address } from "../../models/address";
import { LeadDetails } from "../../models/lead";
import { vehicleDetails } from "../../models/vehicleDetails";
import { NHTTPLoaderService } from 'neutrinos-seed-services';

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    // Default Variables
    step = 0;
    spinner = false;
    currentLink;
    gender = "F";
    submitted = false;
    selectDisabled = false;
    displayDateString: any;
    maxDate = "2000-12-31";
    toolbarIcons = ["home", "person"];
    planStatuses = ["Premium", "Gold", "Platinum"];
    medicalAidStatuses = ["Dialdirect", "Discovery", "Clientele"];
    nonMotor = ["Home Content", "Building", "Portable Possessions"];
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
            "brandId": "02", "brandName": ""
        },
        "brokerDetails": {
            "brokerCode": "BIB", "brokerGroup": "", "vdnNumber": "TEST7"
        },
        "envIdentity": "DEN0210",
        "theme": "dial-theme"
    };

    leadAddress: any = {};

    // Strings
    fullName = "";
    refNumber = "";
    access_token;
    postCode = "";
    suburbSequence: string = "";
    selectedYear = "";
    selectedMake = "";
    selectedModel = "";
    idEntity: string = "2";
    riSkitem: string = "2";
    exTended: string = "2";
    quOte: string = "2";
    unDerwrite: string = "2";
    baNking: string = "2";
    fiNalise: string = "2";
    afTersale: string = "2";
    idEntityStatus: string = "";
    riSkitemStatus: string = "";
    exTendedStatus: string = "";
    quOteStatus: string = "";
    unDerwriteStatus: string = "";
    baNkingStatus: string = "";
    fiNaliseStatus: string = "";
    afTersaleStatus: string = "";

    // Arrays
    titles = [];
    suburbs = [];
    areatype = [];
    year: any = [];
    make: any = [];
    model: any = [];
    vehicle: any = [];
    vehicleRes: any;
    modelDescription: any = [];
    additional = [];
    maritalStats = [];

    // Intervals
    refCodeInterval;
    vehicleYearInterval;
    genTokenInterval;
    getStaticInterval;
    getVehicleInterval;
    getVehicleResInterval;
    getVehicleMakeInterval;
    getVehicleModelInterval;
    getVehicleModelDescriptionInterval;

    // Data Model
    person = new Person();
    contactDetails = new ContactDetails();
    address = new Address();
    lead = new LeadDetails();
    vehicleDetails = new vehicleDetails();

    // Form Groups
    policyHolderForm: FormGroup;
    medicalAid: FormGroup;
    motorInsurance: FormGroup;
    riskAddress: FormGroup;
    prossessingPermission: FormGroup;

    riskItemDetails: FormGroup;
    vehicleYear: FormControl;
    vehicleMake: FormControl;
    vehicleModel: FormControl;
    vehicleModelDescription: FormControl;


    // =============================================================================
    // Constructor
    // =============================================================================

    constructor(
        private bdms: NDataModelService,
        private http: HttpClient,
        private staticdataService: staticdataService,
        private createleadService: createleadService,
        private suburbService: suburbService,
        private vehiclesService: vehiclesService,
        private vehiclemakeService: vehiclemakeService,
        private vehiclemodelService: vehiclemodelService,
        private vehiclemodeldescriptionService: vehiclemodeldescriptionService,
        private createvehicleService: createvehicleService,
        private tokenService: tokenService,
        private nLoader: NHTTPLoaderService) {
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
            address1: new FormControl(''),
            address2: new FormControl(''),
            address3: new FormControl(''),
            suburb: new FormControl(''),
            postalCode: new FormControl('')
        });

        // Risk Items Details
        this.riskItemDetails = new FormGroup({
            vehicleYear: new FormControl('', Validators.required),
            vehicleMake: new FormControl('', Validators.required),
            vehicleModel: new FormControl('', Validators.required),
            vehicleModelDescription: new FormControl('', Validators.required)
        });
    }

    // =============================================================================
    // NgOnInit
    // =============================================================================

    ngOnInit() {

        this.nLoader._isHTTPRequestInProgress$.subscribe(res => {
            this.spinner = res;
        })

        // Get Expiry Time and Check If there is a Token in the Local Storage
        let curTime = Date.now();
        let exTime = Number(localStorage.getItem('expiryTime'));
        let temp_tok = localStorage.getItem("token");

        if (curTime >= exTime) {
            this.genToken();
        } else if (temp_tok) {
            this.access_token = temp_tok;
            this.staticdataService.getStaticData(this.access_token);
        } else {
            this.genToken();
        }

        // Static Data Interval
        this.getStaticInterval = setInterval(() => {
            this.titles = this.staticdataService.title;
            this.maritalStats = this.staticdataService.maritalStatus;
            this.additional = this.staticdataService.additional;
            this.areatype = this.staticdataService.areatype;

            if (this.titles.length && this.maritalStats.length && this.additional.length && this.areatype.length) {
                clearInterval(this.getStaticInterval);
            }
        }, 1000);

        this.currentLink = "idEntity";
    }

    // ===========================================================================================
    // Functions
    // ===========================================================================================

    // convenience getter for easy access to form fields
    get policy() { return this.policyHolderForm.controls; };
    get medical() { return this.medicalAid.controls; };
    get motor() { return this.motorInsurance.controls; };
    get risk() { return this.riskAddress.controls; };
    get riskItem() { return this.riskItemDetails.controls; };
    get prossessing() { return this.prossessingPermission.controls; };

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

    // Set Postal Code
    setPostCode(suburb) {
        this.postCode = suburb.postCode;
        this.suburbSequence = suburb.sequenceNumber;
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
            this.gender = "M";
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
        this.person.firstName = this.policyHolderForm.value.firstName.toUpperCase();
        this.person.lastName = this.policyHolderForm.value.surname.toUpperCase();
        this.person.titleCode = this.policyHolderForm.value.title;
        this.person.identification.idType = Number(this.policyHolderForm.value.idType);
        this.person.identification.idNumber = this.policyHolderForm.value.idNumber;
        this.person.dateOfBirth = this.displayDateString;
        this.person.gender = this.gender;
        this.person.maritalStatus = this.policyHolderForm.value.maritalStatus.code;
        this.person.maritalStatusDesc = this.policyHolderForm.value.maritalStatus.description;
        this.person.occupationStatus = this.policyHolderForm.value.employmentStatus;
        this.person.initials = this.getInitials(this.person.firstName);
        this.person.age = this.ageFromDateOfBirth(this.displayDateString);
        // Contact Details
        this.contactDetails.email = this.policyHolderForm.value.email;
        this.contactDetails.phones[0].number = this.policyHolderForm.value.cellNumber;

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

        // Address
        // this.vehicleDetails.addresses[0].areaType = this.riskAddress.value.areaTypes.substr(1, 1);
        // this.vehicleDetails.addresses[0].address1 = this.riskAddress.value.address1;
        // this.vehicleDetails.addresses[0].address2 = this.riskAddress.value.address2;
        // this.vehicleDetails.addresses[0].address3 = this.riskAddress.value.address3;
        // this.vehicleDetails.addresses[0].suburbName = this.riskAddress.value.suburb;
        // this.vehicleDetails.addresses[0].suburbSequence = this.suburbSequence;
        // this.vehicleDetails.addresses[0].postalCode = this.riskAddress.value.postalCode;

        // Lead Address
        this.leadAddress = {
            "addressType": "R",
            "isResidentialAdd": "Y",
            "isPostalAdd": "Y",
            "accessControlledType": "01",
            "address1" : this.riskAddress.value.address1,
            "address2" : this.riskAddress.value.address2,
            "address3" : this.riskAddress.value.address3,
            "areaType" : this.riskAddress.value.areaTypes.substr(1, 1),
            "postalCode" : this.riskAddress.value.postalCode,
            "suburbName" : this.riskAddress.value.suburb,
            "suburbSequence" : this.suburbSequence,
            "province": ""
        }

        console.log(this.suburbSequence, "SubSequence");

        // Add address to lead
        this.lead.addresses[0] = this.leadAddress;

        this.fullName = this.policyHolderForm.value.firstName + " " + this.policyHolderForm.value.surname;

        // ===========================================================================================
        // CREATE LEAD
        // ===========================================================================================

        // POST  PERSONAL DATA
        this.createleadService.createlead(this.access_token, this.lead);

        // Seconds Interval
        this.refCodeInterval = setInterval(() => {
            if (this.createleadService.refNumber.length) {
                clearInterval(this.refCodeInterval);
                this.refNumber = this.createleadService.refNumber;

                this.policyHolderForm.disable();
                this.riskAddress.disable();
                this.vehiclesService.getYears(this.access_token);

                // Seconds Interval
                this.getVehicleInterval = setInterval(() => {
                    this.year = this.vehiclesService.year;
                    if (this.year.length) {
                        clearInterval(this.getVehicleInterval);

                        this.idEntity = "1";
                        this.idEntityStatus = "complete";

                        this.setActiveLink('riSkitem');
                        this.riSkitem = "1";
                    }
                }, 1000);
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
        // Open Loader
        this.getVehicleMakeInterval = setInterval(() => {
            this.make = this.vehiclemakeService.make;
            if (this.make.length) {
                clearInterval(this.getVehicleMakeInterval);
            }
        }, 1000);
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
            }
        }, 1000);
    }

    // ===========================================================================================
    // Store the Vehicle
    // ===========================================================================================

    storeVehicle(vehicle) {
        this.vehicle = vehicle;
        console.log(this.vehicle, "vehicle");

        var todayDate = new Date().toISOString().slice(0, 10);

        this.vehicleDetails.vehicleDetails["year"] = this.vehicle['vehicle']['year'];
        this.vehicleDetails.vehicleDetails["model"] = this.vehicle['vehicle']['model'];
        this.vehicleDetails.vehicleDetails["vehicleKey"] = this.vehicle.key;
        this.vehicleDetails.vehicleDetails["manufacturer"] = this.vehicle['manufacturer']['type'];
        // this.vehicleDetails.vehicleDetails["engineCapacity"] = this.vehicle['vehicle']['engineCubicCapacity'];
        this.vehicleDetails.vehicleDetails["vehicleType"] = this.vehicle['vehicle']['type'];
        this.vehicleDetails.vehicleDetails["vehicleTypeDescription"] = this.vehicle['vehicle']['typeDescription'];
        this.vehicleDetails.vehicleDetails["make"] = this.vehicle['manufacturer']['description'];
        this.vehicleDetails.vehicleDetails["vehicleDescription"] = this.vehicle['vehicle']['modelDescription'];
        this.vehicleDetails["commencementDate"] = todayDate;
        this.vehicleDetails["effectiveDate"] = todayDate;
        this.vehicleDetails["inceptionDate"] = todayDate;
        this.vehicleDetails["referenceNumber"] = this.refNumber;

        console.log(this.vehicleDetails, "Vehicle Details");
        this.createvehicleService.createVehicle(this.access_token, this.vehicleDetails, this.refNumber);
        
        // Seconds Interval
        this.getVehicleResInterval = setInterval(() => {
            this.vehicleRes = this.createvehicleService.vehicleRes;
            if (this.vehicleRes) {
                clearInterval(this.getVehicleResInterval);
            }
        }, 1000);
    }
}
